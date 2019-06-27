import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-screen',
  templateUrl: './display-screen.component.html',
  styleUrls: ['./display-screen.component.css'],
})
export class DisplayScreenComponent implements OnInit {
  message: string;
  isTimeUp: boolean = false;
  @Input() showMessage: boolean;

  constructor() {}

  ngOnInit() {}

  reloadPage(): void {
    console.log('Page reloading');
    setTimeout(() => {
      location.reload();
    }, 1000);
  }

  getMessage(): string {
    if (this.showMessage) return this.losingMessage();

    return this.winningMessage();
  }

  losingMessage(): string {
    return 'Sorry! You lost the game';
  }

  winningMessage(): string {
    return 'Congratulations!';
  }
}
