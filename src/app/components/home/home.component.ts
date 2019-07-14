import { Component, OnInit } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  timeComponent: TimerComponent;
  constructor() {}

  ngOnInit() {}
}
