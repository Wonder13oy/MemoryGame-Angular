import { Component, OnInit } from '@angular/core';
import { UserStatsService } from '../../services/user-stats.service';
import { Router } from '@angular/router';
import { Leaderboard } from '../../leaderboardInterface';
// import {  } from '../../services/'

@Component({
  selector: 'app-time-leaderboard',
  templateUrl: './time-leaderboard.component.html',
  styleUrls: ['./time-leaderboard.component.css'],
})
export class TimeLeaderboardComponent implements OnInit {
  users: Object;

  constructor(private userStats: UserStatsService, private router: Router) {}

  ngOnInit() {
    this.userStats.getUserTimes().subscribe({
      next(response) {
        this.users = response;
        console.log(this.users);
      },
      error(err) {
        console.error('Error: ' + err);
      },
      complete() {
        console.log('Completed');
      },
    });
  }

  getTopTen(users) {
    const topTen = [];
    let i = 0;

    while (i < users.length - 1) {
      i++;

      if (users[i] > users[i + 1]) {
        let temp = users[i];
        users[i] = users[i + 1];
        users[i + 1] = users[i];

        i = 0;
      }
    }

    for (let i = 0; i < 10; i++) {
      topTen.push(users[i]);
    }

    return topTen;
  }
}
