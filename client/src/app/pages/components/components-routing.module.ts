import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: '', loadChildren: './base/base.module#BaseModule' },
      { path: 'aroma', loadChildren: './aroma/aroma.module#AromaModule' },
      { path: 'booster', loadChildren: './booster/booster.module#BoosterModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
