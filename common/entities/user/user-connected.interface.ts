import { Entity } from '../../interfaces';

export interface UserConnected extends Entity {
  readonly username: string;
  readonly email: string;
}
