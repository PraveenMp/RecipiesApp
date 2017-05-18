import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent }  from './categories.component';
import { AddCategoriesComponent } from './addcategories.component';

const categoryRoutes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/add', component: AddCategoriesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(categoryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CategoryRoutingModule {}