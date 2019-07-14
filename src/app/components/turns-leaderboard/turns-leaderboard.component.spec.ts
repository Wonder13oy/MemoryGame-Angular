import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnsLeaderboardComponent } from './turns-leaderboard.component';

describe('TurnsLeaderboardComponent', () => {
  let component: TurnsLeaderboardComponent;
  let fixture: ComponentFixture<TurnsLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnsLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnsLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
