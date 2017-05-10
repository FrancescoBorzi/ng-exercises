import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment2Component } from './assignment2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [Assignment2Component],
  declarations: [Assignment2Component]
})
export class Assignment2Module { }
