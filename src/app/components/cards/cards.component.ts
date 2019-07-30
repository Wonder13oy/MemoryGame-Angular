import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from './../../cardModal';
import { Router } from '@angular/router';
import { CardsService } from './../../services/cards.service';
import { UserStatsService } from '../../services/user-stats.service';
import { CurrentPlayerService } from '../../services/current-player.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  //Card variables
  firstCard: Card;
  cards: Card[];
  comparedCards: Card[] = [];
  previousCard: Card;
  turns: number;
  clicks: number;
  matches: number;

  //Component interaction
  @Input() isTimesUp: boolean = false;
  @Input() userNameEntered: boolean = true;
  @Input() timeTaken: String;
  @Output() cardsMatchedEvent: EventEmitter<Boolean> = new EventEmitter();
  @Output() numberOfTurnsEvent: EventEmitter<Number> = new EventEmitter();

  constructor(
    private cardData: CardsService,
    private router: Router,
    private userStatsService: UserStatsService,
    private player: CurrentPlayerService,
  ) {
    this.turns = 0;
    this.clicks = 0;
    this.matches = 0;
  }

  ngOnInit() {
    this.cards = this.cardData.getCards();
    this.shuffleCards(this.cards);
  }

  flipCard(card: Card): void {
    //Counting number of turns a player has done
    this.clicks++;
    if (this.clicks % 2 === 0) {
      this.turns++;
    }

    if (card.clicked) {
      return;
    }

    this.previousCard = this.firstCard;
    this.firstCard = card;

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
      this.compareCards();
    }
  }

  checkMatch() {
    if (this.comparedCards[0].name === this.comparedCards[1].name) {
      //This is a match
      this.comparedCards.forEach(card => {
        card.matched = true;
      });
      this.matches++;
    } else {
      //This is not a match
      this.comparedCards.forEach(card => (card.clicked = !card.clicked));
    }
    this.comparedCards = [];
  }

  compareCards() {
    setTimeout(() => {
      this.checkMatch();

      //When all cards matched, timer is stopped
      if (this.matches === 15) {
        console.log('All cards are matched');

        this.player.setUserClicks(this.turns);
        console.log(this.player.getUserTime());

        this.cardsMatchedEvent.emit(true);
        this.numberOfTurnsEvent.emit(this.turns);
      }
    }, 400);
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
