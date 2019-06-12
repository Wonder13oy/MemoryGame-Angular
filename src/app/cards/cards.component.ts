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
  selectedCard: Card;

  constructor() {
    document
      .querySelectorAll('.card-container')
      .forEach((card) => card.addEventListener('click', this.flipCard));
  }

  ngOnInit() {}

  onSelect(card: Card): void {
    this.selectedCard = card;
  }

  flipCard(): void {
    document
      .querySelector(`#${this.selectedCard.id}`)
      .removeEventListener('click', this.flipCard);
    console.log(this.selectedCard);
    // this.firstCard = setTimeout(() => {
    //   this.checkMatch();
    // }, 1000);
  }

  checkMatch() {}
}
