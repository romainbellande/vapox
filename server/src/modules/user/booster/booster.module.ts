import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../database/database.module';
import { BoosterController } from './booster.controller';
import { BoosterService } from './booster.service';
import { userProviders } from '../user.providers';
import { boosterProviders } from './booster.providers';

@Module({
  modules: [DatabaseModule],
  controllers: [BoosterController],
  components: [
    BoosterService,
    ...userProviders,
    ...boosterProviders,
  ],
})
export class BoosterModule {}
