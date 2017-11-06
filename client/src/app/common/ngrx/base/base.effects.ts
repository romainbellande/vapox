import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { types } from './base.actions';
import { NgrxEffect } from '../../ngrx/utils/ngrx/ngrx.effect';
import { BaseService } from '../../../core/services';

@Injectable()
export class BaseEffects {

  constructor(private actions$: Actions,
    private baseService: BaseService) {
    }
  private ngrxEffect: NgrxEffect = new NgrxEffect(this.baseService, this.actions$);
  @Effect()
  baseAdd$ = this.ngrxEffect
    .create(this.baseService.post, types.ADD, types.ADD_SUCCESS, types.ADD_FAIL);

  @Effect()
  baseLoad$ = this.ngrxEffect
    .create(this.baseService.findAll, types.LOAD, types.LOAD_SUCCESS, types.LOAD_FAIL);

  @Effect()
  baseUpdate$ = this.ngrxEffect
    .create(this.baseService.update, types.UPDATE, types.UPDATE_SUCCESS, types.UPDATE_FAIL);

  @Effect()
  baseRemove$ = this.ngrxEffect
    .create(this.baseService.remove, types.REMOVE, types.REMOVE_SUCCESS, types.REMOVE_FAIL);
}
