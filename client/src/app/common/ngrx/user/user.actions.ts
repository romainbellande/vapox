import { Action } from '@ngrx/store';

import { NgrxItemTypes, NgrxItemActions } from '../utils/ngrx/ngrx-item';
import { UserConnected, UserCreate } from '../../../../../../common/entities/user';
import { Credentials } from '../../interfaces';
import { UserState } from './user.state';

class UserTypes extends NgrxItemTypes {
  public readonly CONNECTION = this.get('Connection');
  public readonly CONNECTION_FAIL = this.get('Connection Fail');
  public readonly CONNECTION_SUCCESS = this.get('Connection Success');
  public readonly REGISTRATION = this.get('Registration');
  public readonly REGISTRATION_FAIL = this.get('Registration Fail');
  public readonly REGISTRATION_SUCCESS = this.get('Registration Success');

  constructor(item) {
    super(item);
  }
}

export const types = new UserTypes('user');

export class UserActions extends NgrxItemActions<UserState> {
  constructor(protected state: UserState, protected payload: any) {
    super(state, payload);
  }

  registrationSuccess(): UserState {
    return {
      id: this.payload.id,
      entity: this.payload,
    };
  }
}
