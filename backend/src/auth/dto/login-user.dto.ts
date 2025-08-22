import { IsNotEmpty, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty({ message: '邮箱不能为空!' })
  email: string;

  @IsNotEmpty()
  @MinLength(6, { message: '密码不能少于6位!' })
  password: string;
}
