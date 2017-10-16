import { Connection } from 'mongoose';
import { BoosterSchema } from './booster.schema';

export const boosterProviders = [
  {
    provide: 'BoosterModelToken',
    useFactory: (connection: Connection) => connection.model('Booster', BoosterSchema),
    inject: ['DbConnectionToken'],
  },
];
