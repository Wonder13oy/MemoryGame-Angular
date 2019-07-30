import { Component, OnInit } from '@angular/core';
import { UserStatsService } from '../../services/user-stats.service';
import { HttpClient } from '@angular/common/http';
import { CurrentPlayerService } from '../../services/current-player.service';

@Component({
  selector: 'app-turns-leaderboard',
  templateUrl: './turns-leaderboard.component.html',
  styleUrls: ['./turns-leaderboard.component.css'],
})
export class TurnsLeaderboardComponent implements OnInit {
  users;
  topTen;

  constructor(
    private http: HttpClient,
    private userStats: UserStatsService,
    private currentPlayer: CurrentPlayerService,
  ) {}

  ngOnInit() {
    this.userStats.getUserTimes().subscribe(
      data => {
        this.users = data;

        // Highlight player's postion if on leaderboard
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
        console.log(err.status);
      },
    );
  }
}
