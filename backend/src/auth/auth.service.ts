import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { LoginVo } from './vo/login.vo';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  // 用户注册
  async register(registerUserDto: RegisterUserDto): Promise<string> {
    const exist = await this.userService.findUserByUsername(
      registerUserDto.username,
    );

    if (exist) throw new UnauthorizedException('用户名已被注册,换一个试试吧!');

    await this.userService.create(registerUserDto);
    return '注册成功!';
  }

  // 用户登录
  async login(loginUserDto: LoginUserDto) {
    const user = await this.userService.validateUser(
      loginUserDto.username,
      loginUserDto.password,
    );

    if (!user) throw new UnauthorizedException('邮箱或密码错误!');

    const payload = { sub: user.id, username: user.username };
    const token = this.jwtService.sign(payload);

    const loginVo = new LoginVo();
    loginVo.token = token;
    loginVo.id = user.id;
    loginVo.username = user.username;
    loginVo.email = user.email;
    loginVo.createdAt = user.createdAt;
    loginVo.updatedAt = user.updatedAt;

    return loginVo;
  }
}
