import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { AppState, fromBase } from '../../common/ngrx';
import { Base } from '../../../../../common/entities';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  bases: Store<Base[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(fromBase.selectors.getLoaded)
      .subscribe((isLoaded) => !isLoaded && this.store.dispatch({ type: fromBase.types.LOAD }));
    this.bases = this.store.select(fromBase.selectors.getEntities);
  }

  public getPrice(base: Base): number {
    return Math.round((base.price * 100 / base.ml) * 100) / 100;
  }
}
