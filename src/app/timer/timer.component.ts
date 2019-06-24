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

  constructor() {
    this.min = 1;
    this.sec = 10;

    // this.startCountDown();
  }

  ngOnInit() {
    window.onload = () => {
      this.time = document.getElementById('time');
    };
  }
  startCountDown(): void {
    console.log('Starting count down...');

    let counter = setInterval(() => {
      this.sec--;
      this.time.innerText = this.getTime();
      if (this.sec === 0) {
        this.min--;
        this.sec = 60;
      }

      if (this.min < 1) {
        // this.secLeft = true;
        this.minLeft = true;
      }

      if (this.sec < 30 && this.min < 1) {
        this.minLeft = false;
        this.secLeft = true;
      }

      if (this.sec === 0 && this.min === 0) {
        clearInterval(counter);
      }
    }, 1000);
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
  getMinutes(): number {
    return parseInt(this.min);
  }

  setMinutes(min: number): void {
    this.min = min;
  }

  //Seconds
  getSeconds(): number {
    return this.sec;
  }

  setSeconds(sec: number) {
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
