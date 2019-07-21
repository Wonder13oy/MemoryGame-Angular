import { Component, OnInit } from '@angular/core';
import { UserStatsService } from '../../services/user-stats.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-turns-leaderboard',
  templateUrl: './turns-leaderboard.component.html',
  styleUrls: ['./turns-leaderboard.component.css'],
})
export class TurnsLeaderboardComponent implements OnInit {
  users;
  topTen;

  constructor(private http: HttpClient, private userStats: UserStatsService) {}

  ngOnInit() {
    this.userStats.getUserTimes().subscribe(
      data => {
        this.users = data;
      },
      err => {
        console.log(err.status);
      },
    );
  }
}
