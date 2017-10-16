import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../database/database.module';
import { BaseController } from './base.controller';
import { BaseService } from './base.service';
import { userProviders } from '../user.providers';
import { baseProviders } from './base.providers';

@Module({
  modules: [DatabaseModule],
  controllers: [BaseController],
  components: [
    BaseService,
    ...userProviders,
    ...baseProviders,
  ],
})
export class BaseModule {}
