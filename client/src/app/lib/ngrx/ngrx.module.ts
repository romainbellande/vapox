import { NgModule } from '@angular/core';

/** Ngrx */
import { StoreModule, META_REDUCERS } from '@ngrx/store';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/** Ngrx App */
import { effects,
         AppState,
         NgrxService,
         REDUCER_TOKEN } from '../../common/ngrx';

import { Ngrx } from '../../common/ngrx/utils/ngrx';

import { CustomRouterStateSerializer } from '../../common/ngrx/utils/ngrx/ngrx.state';

export function getReducers(ngrxService: NgrxService) {
  return ngrxService.reducers;
}

export function getMetaReducers(ngrxService: NgrxService) {
  return ngrxService.metaReducers;
}


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(REDUCER_TOKEN),
    StoreRouterConnectingModule,
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  exports: [],
  providers: [
    NgrxService,
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    {
      provide: META_REDUCERS,
      deps: [NgrxService],
      useFactory: getMetaReducers
    },
    {
      provide: REDUCER_TOKEN,
      deps: [NgrxService],
      useFactory: getReducers
    }
  ],
})
export class NgrxModule {}
