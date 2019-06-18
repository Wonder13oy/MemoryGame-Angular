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

  ngOnInit() {
    this.shuffleCards(this.cards);
  }

  flipCard(card: Card): void {
    this.previousCard = this.card;
    this.card = card;

    //Make sure same card not selected twice
    if (this.previousCard === this.card) {
      return;
    }

    if (this.comparedCards.length >= 2) {
      this.comparedCards = [];
      return;
    }
    this.comparedCards.push(this.card);

    //Toggle whether the card is clicked or not
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
    } else {
      //This is not a match
      this.comparedCards.forEach((card) => (card.clicked = !card.clicked));
    }
    this.comparedCards = [];
  }

  //Randomise cards' postions
  shuffleCards(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
