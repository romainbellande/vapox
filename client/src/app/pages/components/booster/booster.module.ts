import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { BoosterRoutingModule } from './booster-routing.module';
import { BoosterComponent } from './booster.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BoosterRoutingModule
  ],
  declarations: [BoosterComponent]
})
export class BoosterModule { }
