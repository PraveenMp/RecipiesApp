import { NgModule } from '@angular/core';
import { HomeComponent }       from './home.component';
import { HomeRoutingModule } from './home.routing'; 
import { SharedModule } from '../Shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule,
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }
