import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/base/base.module#BaseModule' },
  { path: 'portal', loadChildren: './pages/portal/portal.module#PortalModule' },
  { path: 'aroma', loadChildren: './pages/aroma/aroma.module#AromaModule' },
  { path: 'booster', loadChildren: './pages/booster/booster.module#BoosterModule' },
  { path: 'recipe', loadChildren: './pages/recipe/recipe.module#RecipeModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
