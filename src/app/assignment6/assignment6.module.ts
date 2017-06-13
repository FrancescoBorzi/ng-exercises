import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { Assignment6Component } from './assignment6.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [Assignment6Component],
  declarations: [Assignment6Component]
})
export class Assignment6Module { }
