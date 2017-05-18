import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdMenuModule,
        MdCardModule,
        MdToolbarModule,
        MdIconModule
    ],
    exports: [
        CommonModule,
        MaterialModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdMenuModule,
        MdCardModule,
        MdToolbarModule,
        MdIconModule
    ]
})
export class SharedModule { }
