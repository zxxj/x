import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import type { Request } from 'express';
import { UserProfileVo } from './vo/user-profile.vo';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { UpdatePasswordDto } from './dto/update-password.dto';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Req() req: Request): Promise<UserProfileVo> {
    const userId = req.user!.userId; // 类型断言,不断言会报ts类型错误
    return await this.userService.findUserById(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Put('profile')
  async updateProfile(
    @Req() req: Request,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<Partial<User>> {
    const userId = req.user!.userId;
    const user = await this.userService.update(userId, updateUserDto);
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Put('password')
  async password(
    @Req() req: Request,
    @Body() updatePasswordDto: UpdatePasswordDto,
  ) {
    const username = req.user!.username;
    const userId = req.user!.userId;

    const user = await this.userService.findUserByUsername(username);
    if (!user) throw new NotFoundException('没有查询到此用户!');

    const isMatch = await bcrypt.compare(
      updatePasswordDto.oldPassword,
      user.password,
    );

    if (!isMatch) throw new BadRequestException('旧密码错误!');

    const hashed = (await bcrypt.hash(
      updatePasswordDto.newPassword,
      10,
    )) as string;

    return this.userService.updatePassword(userId, hashed);
  }
}
