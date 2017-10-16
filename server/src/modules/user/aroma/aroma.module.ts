import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../database/database.module';
import { AromaController } from './aroma.controller';
import { AromaService } from './aroma.service';
import { userProviders } from '../user.providers';
import { aromaProviders } from './aroma.providers';

@Module({
  modules: [DatabaseModule],
  controllers: [AromaController],
  components: [
    AromaService,
    ...userProviders,
    ...aromaProviders,
  ],
})
export class AromaModule {}
