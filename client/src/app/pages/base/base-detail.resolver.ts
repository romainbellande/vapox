import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';

import { Base } from '../../../../../common/entities/base';
import { AppState, fromBase } from '../../common/ngrx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/filter';

@Injectable()
export class BaseDetailResolver implements Resolve<Base> {
  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Base> {
    this.store.select(fromBase.selectors.getLoaded)
      .subscribe((isLoaded) => !isLoaded && this.store.dispatch({ type: fromBase.types.LOAD }));
    this.store.dispatch({
      type: fromBase.types.SELECT,
      payload: route.params.baseId
    });
    return this.store.select(fromBase.selectors.getSelectedEntity)
    .filter((base) => !!base).take(1);
  }
}
