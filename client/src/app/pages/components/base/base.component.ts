import { Store } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { AppState, fromBase } from '../../../common/ngrx';
import { Base } from '../../../../../../common/entities';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseComponent implements OnInit {
  bases: Store<Base[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(fromBase.selectors.getLoaded)
      .subscribe((isLoaded) => !isLoaded && this.store.dispatch({ type: fromBase.types.LOAD }));
    this.bases = this.store.select(fromBase.selectors.getEntities);
  }
}
