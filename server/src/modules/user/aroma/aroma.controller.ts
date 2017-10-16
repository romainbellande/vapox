import { Controller, Get, Post, Body, Param, Req } from '@nestjs/common';

import { AppConfig } from '../../../../../common/config';
import { UserEndpoint } from '../../../../../common/entities/user';
import { Aroma, AromaCreate, AromaEndpoint } from '../../../../../common/entities/aroma';
import { AromaService } from './aroma.service';

const endpoint = `${ UserEndpoint.get }/${ AromaEndpoint.get }`;

@Controller(endpoint)
export class AromaController {
  constructor(private readonly aromaService: AromaService) {
    console.info(endpoint);
  }

  @Post()
  async create(@Req() req, @Body() aromaCreate: AromaCreate): Promise<Aroma> {
    return this.aromaService.create(req.user.id, aromaCreate);
  }

  @Get(AromaEndpoint.param)
  async find(@Param() param): Promise<Aroma> {
    return this.aromaService.find(param);
  }

  @Get()
  async findAll(@Req() req): Promise<Aroma[]> {
    return this.aromaService.findAll(req.user.id);
  }
}
