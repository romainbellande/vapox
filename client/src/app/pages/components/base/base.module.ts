import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../../../shared/shared.module';
import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { BaseFormComponent } from './base-form/base-form.component';
import { BaseDetailResolver } from './base-detail.resolver';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BaseRoutingModule
  ],
  declarations: [BaseComponent, BaseFormComponent],
  providers: [
    BaseDetailResolver
  ]
})
export class BaseModule { }
