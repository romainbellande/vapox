import { ActionReducer, MetaReducer, ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../../../../environments/environment';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
// import { compose } from '@ngrx/core/compose';
/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers, createSelector, createFeatureSelector } from '@ngrx/store';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

import { RouterStateUrl, NgrxState } from './ngrx.state';

export class NgrxReducers<T> {
  public reducers: ActionReducerMap<T>;
  public metaReducers: MetaReducer<T>[] = !environment.production
  ? [this.logger, storeFreeze]
  : [];

  constructor(reducers: ActionReducerMap<T>) {
    this.reducers = Object.assign(reducers, {
      router: fromRouter.routerReducer
    });
  }

  private logger(_reducer: ActionReducer<T>): ActionReducer<T> {
    return function(state: T, action: any): T {
      console.log('state', state);
      console.log('action', action);

      return _reducer(state, action);
    };
  }
}


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */

//  export const reducers: ActionReducerMap<AppState> = {
//    base: fromBase.reducer,
//    forms: fromUser.reducer,
//    router: fromRouter.routerReducer
//  };

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
// export const metaReducers: MetaReducer<AppState>[] = !environment.production
// ? [logger, storeFreeze]
// : [];
