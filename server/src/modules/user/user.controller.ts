import { Controller, Get, Post, Body, Param, Req } from '@nestjs/common';

import { AppConfig } from '../../../../common/config';
import { User, UserCreate, UserEndpoint } from '../../../../common/entities/user';
import { UserService } from './user.service';

const endpoint = UserEndpoint.get;

@Controller(endpoint)
export class UserController {
  constructor(private readonly userService: UserService) {
    console.info(endpoint);
  }

  @Post()
  async create(@Body() userCreate: UserCreate): Promise<User> {
    return this.userService.create(userCreate);
  }

  @Get('me')
  async find(@Req() req): Promise<User> {
    return this.userService.findById(req.user.id);
  }
}
