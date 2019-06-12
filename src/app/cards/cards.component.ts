import { Component, OnInit } from '@angular/core';
import { Card } from './../cardModal';
import { CARDS } from './../cardPack';
import { timeout } from 'q';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards = CARDS;
  firstCard;
  secondCard;
  hasFlippedCard: boolean;

  constructor() {}

  ngOnInit() {
    const cardPack = document.querySelectorAll('.card-container');
    // cardPack.forEach((card) => card.addEventListener('click', this.flipCard));
  }

  flipCard(card: number): void {
    console.log(this);
    this.firstCard = setTimeout(() => {
      this.checkMatch();
    }, 1000);
  }

  checkMatch() {}
}
