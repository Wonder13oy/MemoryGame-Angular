import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-screen',
  templateUrl: './display-screen.component.html',
  styleUrls: ['./display-screen.component.css'],
})
export class DisplayScreenComponent implements OnInit {
  message: string;
  isTimeUp: boolean = false;

  constructor() {}

  ngOnInit() {}

  reloadPage(): void {
    console.log('Page reloading');
    setTimeout(() => {
      location.reload();
    }, 1000);
  }

  getMessage(player): string {
    if (player.matches != 15 && player.time == '00:00')
      return this.losingMessage();

    return this.winningMessage();
  }

  losingMessage(): string {
    return 'Unlucky, Try Again?';
  }

  winningMessage(): string {
    return 'Congratulations!';
  }
}
