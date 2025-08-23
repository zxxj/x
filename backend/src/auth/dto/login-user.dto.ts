import { IsNotEmpty, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty({ message: '用户名不能为空!' })
  username: string;

  @IsNotEmpty()
  @MinLength(6, { message: '密码不能少于6位!' })
  password: string;
}
