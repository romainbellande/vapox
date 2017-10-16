import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../database/database.module';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';
import { userProviders } from '../user.providers';
import { recipeProviders } from './recipe.providers';

@Module({
  modules: [DatabaseModule],
  controllers: [RecipeController],
  components: [
    RecipeService,
    ...userProviders,
    ...recipeProviders,
  ],
})
export class RecipeModule {}
