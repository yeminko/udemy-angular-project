import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesResolverService } from '../recipes/recipes-resolver.service';
import { ShoppingListComponent } from './shopping-list.component';
const routes: Routes = [
  {
    path: '',
    component: ShoppingListComponent,
    resolve: [RecipesResolverService],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingListRoutingModule {}
