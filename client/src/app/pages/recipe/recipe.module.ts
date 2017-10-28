import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from './recipe.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RecipeRoutingModule
  ],
  declarations: [RecipeComponent]
})
export class RecipeModule { }
