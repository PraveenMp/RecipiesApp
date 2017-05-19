import { NgModule } from '@angular/core';
import { CategoriesComponent }       from './categories.component';
import { CategoriesListComponent }       from './categories-list.component';
import { AddCategoriesComponent } from './addcategories.component';
import { CategoryService } from './categories.service'
import { CategoryRoutingModule } from './categories.routing'; 
import { SharedModule } from '../Shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        SharedModule,
        CategoryRoutingModule,
        ReactiveFormsModule 
    ],
    declarations: [CategoriesComponent,CategoriesListComponent,AddCategoriesComponent],
    providers:[CategoryService]
})
export class CategoryModule { }
