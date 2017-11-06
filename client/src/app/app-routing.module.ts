import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/components/components.module#ComponentsModule' },
  { path: 'portal', loadChildren: './pages/portal/portal.module#PortalModule' },
  { path: 'recipe', loadChildren: './pages/recipe/recipe.module#RecipeModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
