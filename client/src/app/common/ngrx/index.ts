import { ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

import { Ngrx, NgrxState } from './utils/ngrx';
import { EntityState } from './utils/entity/entity.states';

import { fromUser, UserState } from './user';
import { fromBase } from './base';
import { fromBooster } from './booster';

import { BaseEffects } from './base/base.effects';
import { UserEffects } from './user/user.effects';
import { BoosterEffects } from './booster/booster.effects';

import { Base, Booster } from '../../../../../common/entities';

export { fromBase, fromUser };

export interface AppState {
  user: UserState;
  base: EntityState<Base>;
  booster: EntityState<Booster>;
}

export const reducers: ActionReducerMap<AppState> = {
  user: fromUser.reducer,
  base: fromBase.reducer,
  booster: fromBooster.reducer
};

export const effects = [
  UserEffects,
  BaseEffects,
  BoosterEffects
];

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

export class NgrxService extends Ngrx<AppState> {
  constructor() {
    super(reducers);
  }
}
