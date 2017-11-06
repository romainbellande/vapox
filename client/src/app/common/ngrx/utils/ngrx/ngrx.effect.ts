import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Actions } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { NgrxAction } from './interfaces';

export class NgrxEffect {
  constructor(private source: any, private actions$: Actions) {}

  create(callback: (payload: any) => Observable<any>,
            event: string,
            eventSuccess: string,
            eventFail: string): Observable<Action> {
    return this.actions$.ofType(event)
      .switchMap((action: NgrxAction) => callback.bind(this.source)(action.payload)
        .map((data) => ({ type: eventSuccess, payload: data}))
        .catch((error) => Observable.of({ type: eventFail, payload: error })));
  }
}
