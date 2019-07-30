import { Injectable } from '@angular/core';
import { UserStatsService } from './user-stats.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentPlayerService {
  private name: string;
  private time: string;
  private turns: number;

  constructor(private userStats: UserStatsService) {}

  setName(name: string) {
    this.name = name;
  }

  getName(): string {
    if (this.name != null || this.name != '') return this.name;

    return 'Enter player name!';
  }

  getUserTime() {
    return this.time;
  }

  getUserClicks() {
    return this.turns;
  }

  setUserTime(time: string) {
    this.time = time;
  }

  setUserClicks(turns: number) {
    this.turns = turns;
  }

  addNewPlayer() {
    const user = {
      name: this.name,
      time: this.time,
      turns: this.turns,
    };

    this.userStats.registerUser(user).subscribe(
      data => {
        console.log(data);
      },
      err => console.log('You got an error', err),
    );
  }
}
