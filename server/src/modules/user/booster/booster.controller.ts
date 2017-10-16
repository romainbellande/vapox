import { Controller, Get, Post, Body, Param, Req } from '@nestjs/common';

import { AppConfig } from '../../../../../common/config';
import { UserEndpoint } from '../../../../../common/entities/user';
import { Booster, BoosterCreate, BoosterEndpoint } from '../../../../../common/entities/booster';
import { BoosterService } from './booster.service';

const endpoint = `${ UserEndpoint.get }/${ BoosterEndpoint.get }`;

@Controller(endpoint)
export class BoosterController {
  constructor(private readonly boosterService: BoosterService) {
    console.info(endpoint);
  }

  @Post()
  async create(@Req() req, @Body() boosterCreate: BoosterCreate): Promise<Booster> {
    return this.boosterService.create(req.user.id, boosterCreate);
  }

  @Get(BoosterEndpoint.param)
  async find(@Param() param): Promise<Booster> {
    return this.boosterService.find(param);
  }

  @Get()
  async findAll(@Req() req): Promise<Booster[]> {
    return this.boosterService.findAll(req.user.id);
  }
}
