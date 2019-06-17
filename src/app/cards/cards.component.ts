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
  card: Card;
  cards: Card[] = CARDS;
  comparedCards: Card[] = [];
  previousCard: Card;
  matches: number = 0;

  constructor() {}

  ngOnInit() {}

  flipCard(card: Card): void {
    this.previousCard = this.card;
    this.card = card;

    //Make sure same card not selected twice
    if (this.previousCard === this.card) {
      return;
    }

    // if (this.card.clicked === true) {
    this.comparedCards.push(this.card);
    console.log(this.comparedCards);
    // }

    this.card.clicked = !this.card.clicked;

    //Only two cards are selected
    if (this.comparedCards.length == 2) {
      setTimeout(() => {
        this.checkMatch();
      }, 500);
    }
  }

  checkMatch() {
    if (this.comparedCards[0].name === this.comparedCards[1].name) {
      //This is a match
      this.matches++;
      console.log('MATCH');
      console.log(this.matches);
    } else {
      //This is not a match
      this.comparedCards.forEach((card) => (card.clicked = !card.clicked));

      console.log('NO MATCH');
    }
    this.comparedCards = [];
  }
}
