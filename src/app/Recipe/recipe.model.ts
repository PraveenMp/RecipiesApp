import {Category} from '../Categories/category.model';

export class Recipe {
    Id:number;
    Title:string;
    CategoryID:number;
    RecipeCategory:Category;
    Ingredients:string;
    Steps:String;
    Duration:number;
    Serves:number;
    Notes:string;
 }