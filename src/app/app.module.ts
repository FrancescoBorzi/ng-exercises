import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Assignment1Module } from './assignment1/assignment1.module';
import { Assignment2Module } from './assignment2/assignment2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Assignment1Module,
    Assignment2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
