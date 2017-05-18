import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { Category } from './category.model';
import { CategoryService } from './categories.service'

@Component({
  templateUrl : './addcategories.component.html',
  styleUrls : ['./categories.component.css']
})

export class AddCategoriesComponent implements OnInit{
   public myForm: FormGroup;
   public submitted: boolean;
   constructor(private _fb: FormBuilder, private categoryService:CategoryService, private route:ActivatedRoute, private router:Router) { 

   } 
    
    ngOnInit() {
        this.myForm = new FormGroup({
            Title : new FormControl('', [Validators.required]),
        });
    }

    save(model: Category, isValid: boolean) {
        this.submitted = true; 
        if(isValid){
            this.categoryService.addCategory(model).subscribe(res=>{
                if(res.Id>0){
                    this.router.navigate(['/categories']);
                }
            });
        }
    }
}
