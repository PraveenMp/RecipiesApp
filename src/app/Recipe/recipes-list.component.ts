import { Component,OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { CategoryService } from '../Categories/categories.service'
import { Category } from '../Categories/category.model'
import { RecipeService } from './recipe.service'
import {Router, ActivatedRoute, Params} from '@angular/router'
import { FormsModule } from '@angular/forms';


@Component({
  templateUrl: './recipes-list.component.html',
  styleUrls : ['./recipe.component.css']
})

export class RecipesListComponent implements OnInit {
  recipes : Array<Recipe>;
  categories : Array<Category>;
  filteredRecipies : Array<Recipe>;
  searchText : string;
  selectedCategory : number;
  serachResultMessage:string;

  constructor(private categoryService:CategoryService, private recipeService:RecipeService, private route:ActivatedRoute, private router:Router) {
  }

  ngOnInit() {
      this.categoryService.getAllCategories().subscribe(categories=>{this.categories=categories;this.categories.splice(0,0,{"Id":0,"Title":"All"})});
      this.getAllRecipes();    
  }

  getAllRecipes(){
    this.recipeService.getAllRecipes().subscribe(res => {this.filteredRecipies= this.recipes = res;});
  }

  goToRecipe(recipe:Recipe){
    this.router.navigate([""+recipe.Id], { relativeTo: this.route });
  }

  editRecipe(recipe:Recipe){
    this.router.navigate(["edit/"+recipe.Id], { relativeTo: this.route });
  }

  deleteRecipe(recipe:Recipe,ev){
    this.recipeService.deleteRecipe(recipe).subscribe(res=>{
        if(res.Id>0){
            this.getAllRecipes();  
        }
    });
  }

  filterRecipies(){
    this.filteredRecipies = Object.assign([], this.recipes).filter(
      item => {
        if(this.selectedCategory>0 && this.searchText){
          return item.CategoryID===this.selectedCategory && item.Title.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
        }
        else if(this.selectedCategory>0){
          return item.CategoryID===this.selectedCategory;
        }
        else if(this.searchText){
          return item.Title.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
        }
        return true;
      }
    )   
  }
}
