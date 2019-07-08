import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponent } from './cards.component';
import { DisplayScreenComponent } from './../display-screen/display-screen.component';
import { CARDS } from './../cardPack';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;
  let cards = CARDS;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardsComponent, DisplayScreenComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add cards to an array', () => {
    let array = component.comparedCards;
    array.push(cards[0]);
    array.push(cards[1]);

    expect(array.length).toBe(2);
  });

  xit('array should only allow 2 cards', () => {
    let array = component.comparedCards;
    array.push(cards[0]);
    array.push(cards[1]);
    array.push(cards[2]);

    expect(array.length).toBe(2);
  });
});
import { from } from 'rxjs';
