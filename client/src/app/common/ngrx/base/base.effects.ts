import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { types } from './base.actions';
import { NgrxEffect } from '../../ngrx/utils/ngrx/ngrx.effect';
import { BaseService } from '../../../core/services';
import { Base } from '../../../../../../common/entities/base';
import { NgrxAction } from '../utils/ngrx/interfaces';

@Injectable()
export class BaseEffects {
  private ngrxEffect: NgrxEffect<Base>;

  constructor(private actions$: Actions,
              private baseService: BaseService) {
    this.ngrxEffect = new NgrxEffect(this.actions$);
  }
  @Effect()
  baseAdd$: Observable<Action> = this.actions$
  .ofType(types.ADD)
  .switchMap((action: NgrxAction) =>
    this.baseService.post(action.payload)
    .map((base: Base) => ({ type: types.ADD_SUCCESS, payload: base }))
    .catch(error => Observable.of({ type: types.ADD_FAIL, payload: error })));

  @Effect()
  baseLoad$: Observable<Action> = this.actions$
    .ofType(types.LOAD)
    .switchMap((action: NgrxAction) =>
      this.baseService.findAll()
      .map((bases: Base[]) => ({ type: types.LOAD_SUCCESS, payload: bases }))
      .catch(error => Observable.of({ type: types.LOAD_FAIL, payload: error })));

  @Effect()
  baseUpdate$: Observable<Action> = this.actions$
    .ofType(types.UPDATE)
    .switchMap((action: NgrxAction) =>
      this.baseService.update(action.payload)
      .map((base: Base) => ({ type: types.UPDATE_SUCCESS, payload: base }))
      .catch(error => Observable.of({ type: types.UPDATE_FAIL, payload: error })));

  @Effect()
  baseRemove$: Observable<Action> = this.actions$
    .ofType(types.REMOVE)
    .switchMap((action: NgrxAction) =>
      this.baseService.remove(action.payload)
      .map((base) => ({ type: types.REMOVE_SUCCESS, payload: base }))
      .catch(error => Observable.of({ type: types.REMOVE_FAIL, payload: error })));
}

// baseAdd$ = this.ngrxEffect
// .create(types.ADD, types.ADD_SUCCESS, types.ADD_FAIL, this.baseService.post);
