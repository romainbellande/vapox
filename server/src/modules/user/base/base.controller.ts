import { Controller, Get, Post, Body, Param, Req } from '@nestjs/common';

import { AppConfig } from '../../../../../common/config';
import { UserEndpoint, Base, BaseCreate, BaseEndpoint } from '../../../../../common/entities';
import { BaseService } from './base.service';

const endpoint = `${ UserEndpoint.get }/${ BaseEndpoint.get }`;

@Controller(endpoint)
export class BaseController {
  constructor(private readonly baseService: BaseService) {
    console.info(endpoint);
  }

  @Post()
  async create(@Req() req, @Body() baseCreate: BaseCreate): Promise<Base> {
    return this.baseService.create(req.user.id, baseCreate);
  }

  @Get(BaseEndpoint.param)
  async find(@Param() param): Promise<Base> {
    return this.baseService.find(param);
  }

  @Get()
  async findAll(@Req() req): Promise<Base[]> {
    return this.baseService.findAll(req.user.id);
  }
}
