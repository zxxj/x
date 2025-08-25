import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class UpdatePasswordDto {
  @IsNotEmpty({ message: '旧密码不能为空!' })
  @MinLength(6, { message: '旧密码长度不能小于6位!' })
  @MaxLength(50, { message: '旧密码长度不能超过50位!' })
  oldPassword: string;

  @IsNotEmpty({ message: '新密码不能为空!' })
  @MinLength(6, { message: '新密码长度不能小于6位!' })
  @MaxLength(50, { message: '新密码长度不能超过50位!' })
  newPassword: string;
}
