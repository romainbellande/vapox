import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Actions } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { NgrxAction } from './interfaces';

export class NgrxEffect <T> {
  constructor(private actions$: Actions) {}

  create(event: string,
         eventSuccess: string,
         eventFail: string,
         callback: (payload: any) => Observable<T | T[]>): Observable<Action> {
    return this.actions$.ofType(event)
      .switchMap((action: NgrxAction) => callback(action.payload)
        .map((data) => ({ type: eventSuccess, payload: action.payload}))
        .catch((error) => Observable.of({ type: eventFail, payload: error })));
  }
}
