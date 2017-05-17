import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html'
})
export class ActiveUsersComponent {
  @Input() users: string[];
  @Output() userSetToInactive = new EventEmitter<number>();

  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
  }
}
