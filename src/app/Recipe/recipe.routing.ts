import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent }  from './recipes-list.component';
import { RecipeDetailComponent }  from './recipes-detail.component';
import { AddRecipeComponent } from './addrecipe.component';

const recipeRoutes: Routes = [
    //{ path: '', component: CategoriesComponent }
    //{ path: 'categories', component: CategoriesComponent },
    //{ path: 'categories/add', component: AddCategoriesComponent }
      /*Lazy loading implemented for ctaegories module*/
    { path: 'recipes', component: RecipesListComponent },
    { path: 'recipes/add', component: AddRecipeComponent },
    { path: 'recipes/:id', component: RecipeDetailComponent},
    { path: 'recipes/edit/:id', component: AddRecipeComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipeRoutingModule {}