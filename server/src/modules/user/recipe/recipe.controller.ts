import { Controller, Get, Post, Body, Param, Req } from '@nestjs/common';

import { AppConfig } from '../../../../../common/config';
import { UserEndpoint } from '../../../../../common/entities/user';
import { Recipe, RecipeCreate, RecipeEndpoint } from '../../../../../common/entities/recipe';
import { RecipeService } from './recipe.service';

const endpoint = `${ UserEndpoint.get }/${ RecipeEndpoint.get }`;

@Controller(endpoint)
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {
    console.info(endpoint);
  }

  @Post()
  async create(@Req() req, @Body() recipeCreate: RecipeCreate): Promise<Recipe> {
    return this.recipeService.create(req.user.id, recipeCreate);
  }

  @Get(RecipeEndpoint.param)
  async find(@Param() param): Promise<Recipe> {
    return this.recipeService.find(param);
  }

  @Get()
  async findAll(@Req() req): Promise<Recipe[]> {
    return this.recipeService.findAll(req.user.id);
  }
}
