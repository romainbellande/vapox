import { RequestMethod } from '@nestjs/common';

import { UserEndpoint } from '../../../../common/entities';
import { BaseController } from '../user/base/base.controller';
import { AromaController } from '../user/aroma/aroma.controller';
import { BoosterController } from '../user/booster/booster.controller';
import { RecipeController } from '../user/recipe/recipe.controller';

export const authRoutes = [
  { path: `/${ UserEndpoint.get }`, method: RequestMethod.GET },
  { path: `/${ UserEndpoint.get }`, method: RequestMethod.PUT },
  { path: `/${ UserEndpoint.get }`, method: RequestMethod.PATCH },
  { path: `/${ UserEndpoint.get }`, method: RequestMethod.DELETE },
  { path: `/${ UserEndpoint.get }/me`, method: RequestMethod.ALL },
  { path: '/auth/authorized', method: RequestMethod.ALL },
  BaseController,
  AromaController,
  BoosterController,
  RecipeController,
];
