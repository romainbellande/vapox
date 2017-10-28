import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './base.component';
import { BaseCreateComponent } from './base-create/base-create.component';
import { BaseDetailResolver } from './base-detail.resolver';

const routes: Routes = [
  { path: '', component: BaseComponent },
  { path: 'create', component: BaseCreateComponent },
  {
    path: 'edit/:baseId',
    component: BaseCreateComponent,
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
