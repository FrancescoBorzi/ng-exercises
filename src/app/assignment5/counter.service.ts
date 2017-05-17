import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  private _activeActionsCount = 0;
  private _inactiveActionsCount = 0;

  constructor() { }

  logActiveAction() {
    this._activeActionsCount++;
    console.log(this._activeActionsCount + ' active actions have been triggered so far.');
  }

  logInactiveAction() {
    this._inactiveActionsCount++;
    console.log(this._inactiveActionsCount + ' inactive actions have been triggered so far.');
  }
}
