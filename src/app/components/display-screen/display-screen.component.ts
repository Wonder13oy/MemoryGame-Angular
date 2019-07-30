import { Component, OnInit } from '@angular/core';
import { UserStatsService } from './../../services/user-stats.service';
import { Router } from '@angular/router';
import { CurrentPlayerService } from '../../services/current-player.service';

@Component({
  selector: 'app-display-screen',
  templateUrl: './display-screen.component.html',
  styleUrls: ['./display-screen.component.css'],
})
export class DisplayScreenComponent implements OnInit {
  message: string;
  name: string;

  constructor(
    private userStatsService: UserStatsService,
    private router: Router,
    private player: CurrentPlayerService,
  ) {}

  ngOnInit() {}

  startGame() {
    if (this.name == undefined || this.name === null) {
      this.restartGame();
    }

    this.player.setName(this.name);
    this.router.navigate(['/game']);
  }

  restartGame() {
    this.router.navigate(['/']);
  }

  reloadPage(): void {
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
}
