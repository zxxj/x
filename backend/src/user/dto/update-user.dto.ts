import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty({ message: '用户名不能为空!' })
  username: string;

  @IsOptional()
  @IsNotEmpty({ message: '邮箱不能为空!' })
  @IsEmail({}, { message: '邮箱格式不正确!' })
  email: string;
}
