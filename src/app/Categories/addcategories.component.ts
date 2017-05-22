import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params} from '@angular/router'
import { Category } from './category.model';
import { CategoryService } from './categories.service'

@Component({
  templateUrl : './addcategories.component.html',
  styleUrls : ['./categories.component.css']
})

export class AddCategoriesComponent implements OnInit{
    public myForm: FormGroup;
    public submitted: boolean;
    public editForm=false;

    constructor(private _fb: FormBuilder, private categoryService:CategoryService, private route:ActivatedRoute, private router:Router) { 
        
    } 
    
    ngOnInit() {
        this.myForm = new FormGroup({
            Title : new FormControl('', [Validators.required]),
            Id : new FormControl(0)
        });
        let id = +this.route.snapshot.params['id'];
        if(id){
            this.editForm=true;
            this.categoryService.getCategory(id).subscribe(res=>{
                console.log(res);
                if(res.Id>0){
                    this.myForm.get('Title').setValue(res.Title);
                    this.myForm.get('Id').setValue(res.Id);
                }
            });            
        }
    }

    save(model: Category, isValid: boolean) {
        this.submitted = true; 
        if(isValid){
            if(this.editForm){
                this.categoryService.editCategory(model).subscribe(res=>{
                    //if(res.Id>0){
                        this.router.navigate(['/categories']);
                    //}
                });
            }
            else{
                this.categoryService.addCategory(model).subscribe(res=>{
                    if(res.Id>0){
                        this.router.navigate(['/categories']);
                    }
                });
            }
        }
    }
}
