import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  // 创建用户
  async create(dto: CreateUserDto): Promise<User> {
    const hashedPassword: string = await bcrypt.hash(dto.password, 10);

    try {
      dto.password = hashedPassword;
      const user = this.prismaService.user.create({ data: dto });
      return user;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`用户创建失败!${error.message}`);
      }
      throw new Error(`用户创建失败,未知错误!$`);
    }
  }

  // 根据邮箱查找用户
  async findUserByEmail(email: string): Promise<User | null> {
    return this.prismaService.user.findUnique({ where: { email } });
  }

  // 根据ID查找用户
  async findUserById(userId: number): Promise<User | null> {
    return this.prismaService.user.findUnique({ where: { id: userId } });
  }

  // 验证用户是否存在与密码是否正确
  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.findUserByEmail(email);

    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch ? user : null;
  }
}
