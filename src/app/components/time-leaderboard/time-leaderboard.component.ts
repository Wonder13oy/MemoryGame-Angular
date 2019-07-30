import { Component, OnInit } from '@angular/core';
import { UserStatsService } from '../../services/user-stats.service';
import { Router } from '@angular/router';
import { Leaderboard } from '../../leaderboardInterface';
import { CurrentPlayerService } from '../../services/current-player.service';
// import {  } from '../../services/'

@Component({
  selector: 'app-time-leaderboard',
  templateUrl: './time-leaderboard.component.html',
  styleUrls: ['./time-leaderboard.component.css'],
})
export class TimeLeaderboardComponent implements OnInit {
  users: Object;
  tableRow;

  constructor(
    private userStats: UserStatsService,
    private router: Router,
    private currentPlayer: CurrentPlayerService,
  ) {}

  ngOnInit() {
    this.userStats.getUserTimes().subscribe(
      data => {
        this.users = data;

        for (const i in this.users) {
          if (this.users[i].name === this.currentPlayer.getName()) {
            setTimeout(() => {
              document
                .getElementById(this.users[i].name)
                .classList.toggle('selected');
            }, 1000);
          }
        }
      },
      err => {
        console.log(err);
      },
    );
  }
}
