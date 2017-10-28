import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { $, Connection, Registration } from './user.actions';
import { UserService } from '../../../core/services';

@Injectable()
export class UserEffects {
  constructor(private actions: Actions,
              private userService: UserService) {}

  @Effect()
  userConnection$: Observable<Action> = this.actions
    .ofType($.CONNECTION)
    .switchMap((action: Connection) => this.userService.connect(action.payload)
      .map((userConnected) => ({ type: $.CONNECTION_SUCCESS, payload: userConnected }))
      .catch((error) => Observable.of({ type: $.CONNECTION_FAIL, payload: error })));

  @Effect()
  userRegistration$: Observable<Action> = this.actions
    .ofType($.REGISTRATION)
    .switchMap((action: Registration) => this.userService.register(action.payload)
      .map((userConnected) => ({ type: $.REGISTRATION_SUCCESS, payload: userConnected }))
      .catch((error) => Observable.of({ type: $.REGISTRATION_FAIL, payload: error })));
}
