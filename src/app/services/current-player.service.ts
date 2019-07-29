import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrentPlayerService {
  private name: String;
  private time: String;
  private turns: Number;

  constructor() {}

  setName(name: String) {
    this.name = name;
  }

  getName(): String {
    if (this.name != null || this.name != '') return this.name;

    return 'Enter player name!';
  }

  setStats(time: String, turns: Number): void {
    this.time = time;
    this.turns = turns;
  }
}
