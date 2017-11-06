import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { AromaRoutingModule } from './aroma-routing.module';
import { AromaComponent } from './aroma.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AromaRoutingModule
  ],
  declarations: [AromaComponent]
})
export class AromaModule { }
