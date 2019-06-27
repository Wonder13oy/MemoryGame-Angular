import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Memory Game';
  wonGame: boolean;
  isTimesUp: boolean;
  numberOfTurns: number;
  timeTaken: string;
}
