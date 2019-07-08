import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserStatsService {
  constructor() {}

  addUser(user) {
    if (user.name == undefined || user.name == ' ') {
      return false;
    } else {
      true;
    }
  }
}
