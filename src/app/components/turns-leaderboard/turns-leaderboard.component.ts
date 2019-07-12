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

  constructor(private http: HttpClient, private userStats: UserStatsService) {}

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
}
