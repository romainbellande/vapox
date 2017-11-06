import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './base.component';
import { BaseFormComponent } from './base-form/base-form.component';
import { BaseDetailResolver } from './base-detail.resolver';

const routes: Routes = [
  { path: '', component: BaseComponent },
  { path: 'form', component: BaseFormComponent },
  {
    path: 'form/:baseId',
    component: BaseFormComponent,
    resolve: {
      base: BaseDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
