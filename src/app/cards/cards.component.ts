import { Component, OnInit } from '@angular/core';
import { Card } from './../cardModal';
import { CARDS } from './../cardPack';
import { TimerComponent } from './../timer/timer.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  firstCard: Card;
  cards: Card[] = CARDS;
  comparedCards: Card[] = [];
  previousCard: Card;
  matches: number = 15;
  timer: TimerComponent;

  constructor() {}

  ngOnInit() {
    this.shuffleCards(this.cards);
    this.timer = new TimerComponent();
  }

  flipCard(card: Card): void {
    if (card.clicked) {
      return;
    }
    this.previousCard = this.firstCard;
    this.firstCard = card;

    //When all cards matched, timer is stopped
    if (this.matches === 15) {
      console.log('All cards are matched');

      this.timer.stopCountDown();
    }

    //Two different cards are chosen
    if (this.comparedCards.length >= 2) {
      this.comparedCards = [];
      return;
    }
    this.comparedCards.push(this.firstCard);

    //Toggle whether the card is clicked or not
    this.firstCard.clicked = true;

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
      this.comparedCards.forEach((card) => {
        card.matched = true;
      });
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
