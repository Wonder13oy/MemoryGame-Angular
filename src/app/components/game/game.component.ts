import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  timeDisplay;

  constructor() {}

  ngOnInit() {
    window.onload = () => {
      console.log('Window Loading');

      this.timeDisplay = document.getElementById('timer');
    };
  }
}
