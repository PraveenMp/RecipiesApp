import { Component } from '@angular/core';
import { Category } from './category.model';
import { CategoryService } from './categories.service'

@Component({
  templateUrl: './categories-list.component.html',
  styleUrls : ['./categories.component.css']
})

export class CategoriesListComponent {
  categories : Array<Category>;
  constructor(private categoryService:CategoryService) {
    this.getAllCategories();    
  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(res => this.categories = res);
  }

  deleteCategory(catetegory:Category){
    this.categoryService.deleteCategory(catetegory).subscribe(res=>{
        if(res.Id>0){
            this.getAllCategories();  
        }
    });
  }
}
