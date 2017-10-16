import { Connection } from 'mongoose';
import { AromaSchema } from './aroma.schema';

export const aromaProviders = [
  {
    provide: 'AromaModelToken',
    useFactory: (connection: Connection) => connection.model('Aroma', AromaSchema),
    inject: ['DbConnectionToken'],
  },
];
