import { NgModule } from '@angular/core';
import { RecipesListComponent }  from './recipes-list.component';
import { AddRecipeComponent } from './addrecipe.component';
import { RecipeDetailComponent }  from './recipes-detail.component';
import { SimpleTinyComponent } from './tinymce.component'
import { RecipeService } from './recipe.service'
import { RecipeRoutingModule } from './recipe.routing'; 
import { SharedModule } from '../Shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        SharedModule,
        RecipeRoutingModule,
        FormsModule,
        ReactiveFormsModule 
    ],
    declarations: [SimpleTinyComponent,RecipesListComponent,AddRecipeComponent,RecipeDetailComponent],
    providers : [RecipeService]
})
export class RecipeModule { }
