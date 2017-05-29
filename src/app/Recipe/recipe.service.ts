import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import { Recipe } from './recipe.model';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment'


@Injectable()
export class RecipeService {
  RecipesServiceUrl:string=environment.RecipesServiceUrl;
  
  constructor(private http:Http){
  }

  getAllRecipes():Observable<Recipe[]>{
    return this.http.get(this.RecipesServiceUrl).map(result=>result.json());
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.http.get(this.RecipesServiceUrl+"/"+id).map(result=>result.json());
  } 

  addRecipe(recipe:Recipe):Observable<Recipe>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.RecipesServiceUrl,JSON.stringify(recipe),options).map(res=>res.json());
  }

  editRecipe(recipe:Recipe):Observable<Recipe>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.RecipesServiceUrl+"/"+recipe.Id,JSON.stringify(recipe),options).map(res=>res.json());
  }

  deleteRecipe(recipe:Recipe):Observable<Recipe>{
    return this.http.delete(this.RecipesServiceUrl+"/"+recipe.Id).map(res=>res.json());
  }

}