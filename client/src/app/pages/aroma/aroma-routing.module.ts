import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AromaComponent } from './aroma.component';

const routes: Routes = [
  { path: '', component: AromaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AromaRoutingModule { }
