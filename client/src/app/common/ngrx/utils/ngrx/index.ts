import { ActionReducerMap } from '@ngrx/store';

import { NgrxState } from './ngrx.state';
import { NgrxReducers } from './ngrx.reducers';

export * from './ngrx.state';

export class Ngrx<T> extends NgrxReducers<T> {
  constructor(reducers: ActionReducerMap<T>) {
    super(reducers);
  }
  getAppState(state: T) {
    return state;
  }
}
