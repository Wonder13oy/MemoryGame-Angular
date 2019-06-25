import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  //DOM variables
  private time: HTMLElement;
  private min;
  private sec;
  private minLeft = false;
  private secLeft = false;
  private counter;

  constructor() {
    this.min = 2;
    this.sec = 60;

    this.startCountDown();
  }

  ngOnInit() {
    window.onload = () => {
      this.time = document.getElementById('time');
    };
  }
  startCountDown(): void {
    console.log('Starting count down...');

    this.counter = setInterval(() => {
      this.sec--;
      this.time.innerText = this.getTime();

      //End of the timer
      if (this.getTime() === '00:00') {
        this.stopCountDown();
      }

      if (this.sec === 0) {
        this.min--;
        this.sec = 60;
      }

      //Turn to timer Orange
      if (this.min < 1) {
        this.minLeft = true;
      }

      //Turn to timer Red
      if (this.sec < 30 && this.min < 1) {
        this.minLeft = false;
        this.secLeft = true;
      }
    }, 1000);
  }

  stopCountDown(): void {
    clearInterval(this.counter);
    console.log('Count down stopped');
  }

  //Time
  getTime(): string {
    return `${this.addZero(this.min)}:${this.addZero(this.sec)}`;
  }

  setTime(min: number, sec: number): void {
    this.setMinutes(min);
    this.setSeconds(sec);
  }

  //Minutes
  private setMinutes(min: number): void {
    this.min = min;
  }

  //Seconds
  private setSeconds(sec: number) {
    if (sec >= 60 && this.min !== 0) {
      this.sec = sec % 60;
      this.min = Math.floor(sec / 60);
    } else {
      this.sec = sec;
    }
  }

  //Add Zeros
  addZero(number: number): string {
    return (number < 10 ? '0' : '') + number;
  }
}
