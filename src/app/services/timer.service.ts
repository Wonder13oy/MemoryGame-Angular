import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private time: HTMLElement;
  private min;
  private sec;
  private minLeft = false;
  private secLeft = false;
  private counter;

  constructor() {}

  startCountDown(): void {
    console.log('Starting count down...');

    this.counter = setInterval(() => {
      this.sec--;
      this.time.innerHTML = this.getTime();

      //End of the timer
      // if (this.stopTimer == true) {
      //   this.stopCountDown();
      // }

      // if (this.getTime() === '00:00') {
      //   this.stopCountDown();
      //   this.timesUpEvent.emit(true);
      // }

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
    this.calculateTimeRemaining();
    console.log(`It took ${this.addZero(this.min)}:${this.addZero(this.sec)}`);

    console.log('Count down stopped');
  }

  calculateTimeRemaining(): void {
    this.min = 1 - this.min;
    this.sec = 60 - this.sec;

    if (this.sec === 60) {
      this.min++;
      this.sec = 0;
    }

    // this.timeTaken.emit(`${this.addZero(this.min)}:${this.addZero(this.sec)}`);
  }

  //Time
  getTime(): string {
    return `${this.addZero(this.min)}:${this.addZero(this.sec)}`;
  }

  //Add Zeros
  addZero(number: number): string {
    return (number < 10 ? '0' : '') + number;
  }
}
