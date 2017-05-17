import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment5Component } from './assignment5.component';
import { ActiveUsersComponent } from './active-users.component';
import { InactiveUsersComponent } from './inactive-users.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [Assignment5Component],
  declarations: [Assignment5Component, ActiveUsersComponent, InactiveUsersComponent]
})
export class Assignment5Module { }
