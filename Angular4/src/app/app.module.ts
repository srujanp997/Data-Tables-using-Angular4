import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material'


import { AppComponent } from './app.component';
import { StudenttableComponent } from './studenttable/studenttable.component';


@NgModule({
  declarations: [
    AppComponent,
    StudenttableComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
