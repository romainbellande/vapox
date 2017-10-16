import { Controller, Post, HttpStatus, HttpCode, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserConnect } from '../../../../common/entities/user';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('token')
  @HttpCode(HttpStatus.OK)
  public async getToken(@Body() userConnect: UserConnect) {
    return await this.authService.createToken(userConnect);
  }

  @Get('authorized')
  public async authorized() {
    console.info('Authorized route...');
  }
}
