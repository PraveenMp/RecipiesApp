import { Component,OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service'
import {Router, ActivatedRoute, Params} from '@angular/router'


@Component({
  templateUrl: './recipes-detail.component.html',
  styleUrls : ['./recipe.component.css']
})

export class RecipeDetailComponent implements OnInit {
  recipe : Recipe;
  constructor(private recipeService:RecipeService, private route:ActivatedRoute, private router:Router) {
  }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.recipeService.getRecipe(id).subscribe(res=>{
        if(res.Id>0){
            this.recipe=res;
        }
    });
  }
}
