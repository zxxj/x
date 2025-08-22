import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
export class RegisterUserDto {
  @IsNotEmpty({ message: '用户名不能为空!' })
  username: string;

  @IsEmail({}, { message: '邮箱格式不正确!' })
  email: string;

  @MinLength(6, { message: '密码不能少于6位!' })
  password: string;
}
