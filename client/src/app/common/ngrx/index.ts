import { ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

import { Ngrx, NgrxState } from './utils/ngrx';
import { EntityState } from './utils/entity/entity.states';

import { fromUser, UserState } from './user';
import { fromBase } from './base';
import { Base } from '../../../../../common/entities';

import { BaseEffects } from './base/base.effects';
import { UserEffects } from './user/user.effects';

export { fromBase, fromUser };

export interface AppState {
  user: UserState;
  base: EntityState<Base>;
}

export const reducers: ActionReducerMap<AppState> = {
  user: fromUser.reducer,
  base: fromBase.reducer
};

export const effects = [
  UserEffects,
  BaseEffects
];

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

export class NgrxService extends Ngrx<AppState> {
  constructor() {
    super(reducers);
  }
}
