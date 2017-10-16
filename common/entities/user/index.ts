import { Endpoint } from '../../models';

export * from './user-connect.interface';
export * from './user-create.interface';
export * from './user.interface';

export const UserEndpoint = new Endpoint('user');
