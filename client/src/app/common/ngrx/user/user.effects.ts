import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { NgrxEffect } from '../utils/ngrx/ngrx.effect';
import { types } from './user.actions';
import { UserService } from '../../../core/services';

@Injectable()
export class UserEffects {
  constructor(private actions: Actions,
              private userService: UserService) {}

  private ngrxEffect: NgrxEffect = new NgrxEffect(this.userService, this.actions);

  @Effect()
  userConnectiontypes = this.ngrxEffect
    .create(this.userService.connect, types.CONNECTION, types.CONNECTION_SUCCESS, types.CONNECTION_FAIL);

  @Effect()
  userRegistrationtypes = this.ngrxEffect
    .create(this.userService.register, types.REGISTRATION, types.REGISTRATION_SUCCESS, types.REGISTRATION_FAIL);
}
