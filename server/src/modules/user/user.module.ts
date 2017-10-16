import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { BaseModule } from './base/base.module';
import { BoosterModule } from './booster/booster.module';
import { AromaModule } from './aroma/aroma.module';
import { RecipeModule } from './recipe/recipe.module';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userProviders } from './user.providers';

@Module({
  modules: [
    DatabaseModule,
    BaseModule,
    BoosterModule,
    AromaModule,
    RecipeModule,
  ],
  controllers: [UserController],
  components: [
    UserService,
    ...userProviders,
  ],
})
export class UserModule {}
