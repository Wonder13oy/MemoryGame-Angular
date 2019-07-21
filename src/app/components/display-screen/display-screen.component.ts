import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() nameEntered: EventEmitter<boolean> = new EventEmitter();
  @Input() numberOfTurns: number;
  @Input() timeTaken: string;

  constructor(
    private userStatsService: UserStatsService,
    private router: Router,
    private player: CurrentPlayerService,
  ) {}

  ngOnInit() {}

  startGame() {
    if (this.name === '' || this.name === null) this.restartGame();

    this.player = new CurrentPlayerService(this.name);
    this.nameEntered.emit(true);

    console.log('Game has started');
    this.router.navigate(['/game']);

    // const user = {
    //   name: this.name,
    //   time: this.timeTaken,
    //   turns: this.numberOfTurns,
    // };

    // this.userStatsService.registerUser(user).subscribe(
    //   data => {
    //     this.router.navigate(['/leaderboard/time']);
    //   },
    //   err => console.log('You got an error', err),
    // );
  }

  restartGame() {
    window.alert('Please enter your name!');
    this.reloadPage();
  }

  reloadPage(): void {
    console.log('Page reloading');
    setTimeout(() => {
      location.reload();
    }, 1000);
  }

  getMessage(): string {
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
