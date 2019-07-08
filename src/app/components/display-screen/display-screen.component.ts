import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserStatsService } from './../../services/user-stats.service';

@Component({
  selector: 'app-display-screen',
  templateUrl: './display-screen.component.html',
  styleUrls: ['./display-screen.component.css'],
})
export class DisplayScreenComponent implements OnInit {
  message: string;
  name: string;
  @Input() showMessage: boolean;
  @Input() isTimesUp: boolean = false;
  @Input() numberOfTurns: number;
  @Input() timeTaken: string;

  constructor(private userStatsService: UserStatsService) {}

  ngOnInit() {}

  addUser(): void {
    const user = {
      name: this.name,
      time: this.timeTaken,
      turns: this.numberOfTurns,
    };
  }

  reloadPage(): void {
    console.log('Page reloading');
    setTimeout(() => {
      location.reload();
    }, 1000);
  }

  getMessage(): string {
    if (this.isTimesUp) return this.losingMessage();

    return this.winningMessage();
  }

  losingMessage(): string {
    return 'Sorry! You lost the game';
  }

  winningMessage(): string {
    return 'Congratulations!';
  }

  playerStats(): string {
    return `You had ${this.numberOfTurns} turns and took you ${this.timeTaken}`;
  }
}
