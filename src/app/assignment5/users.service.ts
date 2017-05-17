import { Injectable } from '@angular/core';
import {CounterService} from "./counter.service";

@Injectable()
export class UsersService {

  private _activeUsers = ['Max', 'Anna'];
  private _inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) { }

  get activeUsers() {
    return this._activeUsers;
  }

  get inactiveUsers() {
    return this._inactiveUsers;
  }

  setUserToActive(id: number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.logActiveAction();
  }

  setUserToInactive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.logInactiveAction();
  }
}
