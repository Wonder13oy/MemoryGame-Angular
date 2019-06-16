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
  card: Card = {
    id: 1,
    name: 'Thor',
    url: './../assets/pics/thor.jpg',
    clicked: false
  };

  constructor() {}

  ngOnInit() {}

  flipCard(): void {
    this.card.clicked = !this.card.clicked;
  }
}
