import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayScreenComponent } from './display-screen.component';
import { isRegExp } from 'util';

fdescribe('DisplayScreenComponent', () => {
  let component: DisplayScreenComponent;
  let fixture: ComponentFixture<DisplayScreenComponent>;
  let player;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayScreenComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    player = {
      matches: 0,
      time: '00:00',
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a message', () => {
    expect(component.getMessage(player)).not.toBeNull();
  });

  it('should display a losing message', () => {
    expect(component.losingMessage()).toBe('Unlucky, Try Again?');
  });

  it('should display winning message', () => {
    expect(component.winningMessage()).toBe('Congratulations!');
  });

  it('should display when player wins', () => {
    player.matches = 15;
    player.time = '00:15';

    expect(component.getMessage(player)).toBe('Congratulations!');
  });

  it('should display when player runs out of time', () => {
    player.time = '00:00';

    expect(component.getMessage(player)).toBe('Unlucky, Try Again?');
  });
});
