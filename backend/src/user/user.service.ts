import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import type { User } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UserProfileVo } from './vo/user-profile.vo';

// 自定义扩展Request,这样ts就会识别req.user中是JWT返回的对象类型了.
declare module 'express' {
  interface Request {
    user?: {
      userId: number;
      username: string;
    };
  }
}

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  // 创建用户
  async create(dto: CreateUserDto): Promise<string> {
    const hashedPassword: string = await bcrypt.hash(dto.password, 10);

    try {
      dto.password = hashedPassword;
      await this.prismaService.user.create({ data: dto });
      return '注册成功';
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`用户创建失败!${error.message}`);
      }
      throw new Error(`用户创建失败,未知错误!`);
    }
  }

  // 根据用户名查找用户
  async findUserByUsername(username: string): Promise<User | null> {
    return this.prismaService.user.findUnique({ where: { username } });
  }

  // 根据ID查找用户
  async findUserById(userId: number): Promise<UserProfileVo> {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });
    if (!user) throw new NotFoundException('用户不存在!');

    const vo = new UserProfileVo();
    vo.id = user.id;
    vo.username = user.username;
    vo.email = user.email;
    vo.createdAt = user.createdAt;
    vo.updatedAt = user.updatedAt;
    return vo;
  }

  // 验证用户是否存在与密码是否正确
  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.findUserByUsername(username);

    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch ? user : null;
  }

  // 更新用户信息
  async update(
    userId: number,
    data: Prisma.UserUpdateInput,
  ): Promise<Partial<User>> {
    const updatedUser = await this.prismaService.user.update({
      where: { id: userId },
      data,
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return updatedUser;
  }

  // 更新密码
  async updatePassword(userId: number, newPassword: string) {
    await this.prismaService.user.update({
      where: { id: userId },
      data: {
        password: newPassword,
      },
    });

    return '密码修改成功!';
  }
}
