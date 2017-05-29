import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params} from '@angular/router'
import { Recipe } from './recipe.model';
import {SimpleTinyComponent} from './tinymce.component'
import { CategoryService } from '../Categories/categories.service'
import { RecipeService } from './recipe.service'

function validateCategory(category : FormControl) {
    return category.value>0 ? null : {
        validateCategory : {
            valid: false
        }
    };
}

@Component({
  templateUrl : './addrecipe.component.html',
  styleUrls : ['./recipe.component.css']
})
export class AddRecipeComponent implements OnInit{
    public myForm: FormGroup;
    public submitted: boolean;
    public editForm=false;
    categories = [];

    constructor(private _fb: FormBuilder, 
                private route:ActivatedRoute,
                private router:Router, 
                private categoryService:CategoryService, 
                private recipeService:RecipeService) { 
        this.categoryService.getAllCategories().subscribe(categories=>this.categories=categories);
    } 
    
    ngOnInit() {
        this.myForm = new FormGroup({
            Id : new FormControl(0),
            Title : new FormControl('',[Validators.required]),
            CategoryID : new FormControl(0,validateCategory),
            Ingredients : new FormControl('',[Validators.required]),
            Steps : new FormControl('',[Validators.required]),
            Duration : new FormControl('1'),
            Serves : new FormControl('1'),
            Notes : new FormControl(''),
        });

        let id = +this.route.snapshot.params['id'];
        if(id){
            this.editForm=true;
            this.recipeService.getRecipe(id).subscribe(res=>{
                if(res.Id>0){
                    this.myForm.get('Id').setValue(res.Id);
                    this.myForm.get('Title').setValue(res.Title);
                    this.myForm.get('CategoryID').setValue(res.CategoryID);
                    this.myForm.get('Ingredients').setValue(res.Ingredients);
                    this.myForm.get('Steps').setValue(res.Steps);
                    this.myForm.get('Duration').setValue(res.Duration);
                    this.myForm.get('Serves').setValue(res.Serves);
                    this.myForm.get('Notes').setValue(res.Notes);
                }
            });            
        }
    }

    save(model: Recipe, isValid: boolean) {
        this.submitted = true; 
        if(isValid){
            if(this.editForm){
                this.recipeService.editRecipe(model).subscribe(res=>{
                    this.router.navigate(['/recipes']);
                });
            }
            else{
                this.recipeService.addRecipe(model).subscribe(res=>{
                    if(res.Id>0){
                        this.router.navigate(['/recipes']);
                    }
                });
            }
        }
    }
}
