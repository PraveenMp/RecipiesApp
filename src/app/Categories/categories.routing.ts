import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent }  from './categories.component';
import { CategoriesListComponent }  from './categories-list.component';
import { AddCategoriesComponent } from './addcategories.component';

const categoryRoutes: Routes = [
    //{ path: '', component: CategoriesComponent }
    //{ path: 'categories', component: CategoriesComponent },
    //{ path: 'categories/add', component: AddCategoriesComponent }
    {
      path: 'categories',
      component: CategoriesComponent,
      children: [
          {
              path: '',
              component: CategoriesListComponent
          },
          {
              path: 'add',
              component: AddCategoriesComponent,
          },
          {
              path: 'edit/:id',
              component: AddCategoriesComponent,
          }
      ]
    }
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