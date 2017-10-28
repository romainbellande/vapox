import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoosterComponent } from './booster.component';

const routes: Routes = [
  { path: '', component: BoosterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoosterRoutingModule { }
