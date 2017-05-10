import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarningAlertComponent } from './warning-alert.component';
import { SuccessAlertComponent } from './success-alert.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [WarningAlertComponent, SuccessAlertComponent],
  declarations: [WarningAlertComponent, SuccessAlertComponent]
})
export class Assignment1Module { }
