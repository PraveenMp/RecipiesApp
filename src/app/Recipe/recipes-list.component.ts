import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service'
import {Router, ActivatedRoute, Params} from '@angular/router'


@Component({
  templateUrl: './recipes-list.component.html',
  styleUrls : ['./recipe.component.css']
})

export class RecipesListComponent {
  recipes : Array<Recipe>;
  constructor(private recipeService:RecipeService, private route:ActivatedRoute, private router:Router) {
    this.getAllRecipes();    
  }

  getAllRecipes(){
    this.recipeService.getAllRecipes().subscribe(res => this.recipes = res);
  }

  goToRecipe(recipe:Recipe){
    this.router.navigate([""+recipe.Id], { relativeTo: this.route });
  }

  editRecipe(recipe:Recipe){
    this.router.navigate(["edit/"+recipe.Id], { relativeTo: this.route });
  }

  deleteRecipe(recipe:Recipe){
    this.recipeService.deleteRecipe(recipe).subscribe(res=>{
        if(res.Id>0){
            this.getAllRecipes();  
        }
    });
  }
}
