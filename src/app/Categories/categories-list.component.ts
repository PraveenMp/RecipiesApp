import { Component } from '@angular/core';
import { Category } from './category.model';
import { CategoryService } from './categories.service'
import {Router, ActivatedRoute, Params} from '@angular/router'


@Component({
  templateUrl: './categories-list.component.html',
  styleUrls : ['./categories.component.css']
})

export class CategoriesListComponent {
  categories : Array<Category>;
  constructor(private categoryService:CategoryService, private route:ActivatedRoute, private router:Router) {
    this.getAllCategories();    
  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(res => this.categories = res);
  }

  editCategory(catetegory:Category){
    this.router.navigate(["edit/"+catetegory.Id], { relativeTo: this.route });
  }

  deleteCategory(catetegory:Category){
    this.categoryService.deleteCategory(catetegory).subscribe(res=>{
        if(res.Id>0){
            this.getAllCategories();  
        }
    });
  }
}
