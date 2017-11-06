import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { types } from './booster.actions';
import { NgrxEffect } from '../../ngrx/utils/ngrx/ngrx.effect';
import { BoosterService } from '../../../core/services';

@Injectable()
export class BoosterEffects {

  constructor(private actions$: Actions,
    private boosterService: BoosterService) {}

  private ngrxEffect: NgrxEffect = new NgrxEffect(this.boosterService, this.actions$);
  @Effect()
  boosterAdd$ = this.ngrxEffect
    .create(this.boosterService.post, types.ADD, types.ADD_SUCCESS, types.ADD_FAIL);

  @Effect()
  boosterLoad$ = this.ngrxEffect
    .create(this.boosterService.findAll, types.LOAD, types.LOAD_SUCCESS, types.LOAD_FAIL);

  @Effect()
  boosterUpdate$ = this.ngrxEffect
    .create(this.boosterService.update, types.UPDATE, types.UPDATE_SUCCESS, types.UPDATE_FAIL);

  @Effect()
  boosterRemove$ = this.ngrxEffect
    .create(this.boosterService.remove, types.REMOVE, types.REMOVE_SUCCESS, types.REMOVE_FAIL);
}
