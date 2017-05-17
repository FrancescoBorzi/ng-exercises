import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html'
})
export class ActiveUsersComponent {
  users: string[];

  constructor(private usersService: UsersService) {
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.setUserToActive(id);
  }
}
