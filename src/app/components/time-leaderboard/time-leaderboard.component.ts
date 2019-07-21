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
  topTenList: Object;

  constructor(private userStats: UserStatsService, private router: Router) {}

  ngOnInit() {
    this.userStats.getUserTimes().subscribe(
      data => {
        this.users = data;
      },
      err => {
        console.log(err);
      },
    );
  }
}
