import { Connection } from 'mongoose';
import { BaseSchema } from './base.schema';

export const baseProviders = [
  {
    provide: 'BaseModelToken',
    useFactory: (connection: Connection) => connection.model('Base', BaseSchema),
    inject: ['DbConnectionToken'],
  },
];
