import { Action } from '@ngrx/store';

import { NgrxItemActions } from '../utils/ngrx/ngrx-item';
import { UserConnected, UserCreate } from '../../../../../../common/entities/user';
import { Credentials } from '../../interfaces';

class UserActions extends NgrxItemActions {
  public CONNECTION = this.get('Connection');
  public CONNECTION_FAIL = this.get('Connection Fail');
  public CONNECTION_SUCCESS = this.get('Connection Success');
  public REGISTRATION = this.get('Registration');
  public REGISTRATION_FAIL = this.get('Registration Fail');
  public REGISTRATION_SUCCESS = this.get('Registration Success');

  constructor(item) {
    super(item);
  }
}

export const $ = new UserActions('user');

export class Connection implements Action {
  readonly type = $.CONNECTION;
  constructor(public payload: Credentials) {}
}

export class ConnectionFail implements Action {
  readonly type = $.CONNECTION_FAIL;
  constructor(public payload: any) {}
}

export class ConnectionSuccess implements Action {
  readonly type = $.CONNECTION_SUCCESS;
  constructor(public payload: UserConnected) {}
}

export class Registration implements Action {
  readonly type = $.REGISTRATION;
  constructor(public payload: UserCreate) {}
}

export class RegistrationFail implements Action {
  readonly type = $.REGISTRATION_FAIL;
  constructor(public payload: any) {}
}

export class RegistrationSuccess implements Action {
  readonly type = $.REGISTRATION_SUCCESS;
  constructor(public payload: UserConnected) {}
}

export type All =
   ConnectionFail
 | ConnectionSuccess
 | RegistrationFail
 | RegistrationSuccess;
