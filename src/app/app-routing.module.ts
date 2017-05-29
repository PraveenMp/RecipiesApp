import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  /*Lazy loading implemented for ctaegories module*/
  /*{
    path: 'categories',
    loadChildren: 'app/Categories/categories.module#CategoryModule',
  },*/
  { path: '',   redirectTo: '/recipes', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
