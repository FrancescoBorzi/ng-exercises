import { Component  } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html'
})
export class InactiveUsersComponent {
  users: string[];

  constructor(private usersService: UsersService) {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.setUserToInactive(id);
  }
}
