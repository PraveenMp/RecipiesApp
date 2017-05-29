import { NgModule } from '@angular/core';
import { RecipesListComponent }  from './recipes-list.component';
import { AddRecipeComponent } from './addrecipe.component';
import { SimpleTinyComponent } from './tinymce.component'
import { RecipeService } from './recipe.service'
import { RecipeRoutingModule } from './recipe.routing'; 
import { SharedModule } from '../Shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        SharedModule,
        RecipeRoutingModule,
        ReactiveFormsModule 
    ],
    declarations: [SimpleTinyComponent,RecipesListComponent,AddRecipeComponent],
    providers : [RecipeService]
})
export class RecipeModule { }
