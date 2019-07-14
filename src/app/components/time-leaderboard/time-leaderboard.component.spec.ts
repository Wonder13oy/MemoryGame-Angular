import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLeaderboardComponent } from './time-leaderboard.component';

describe('TimeLeaderboardComponent', () => {
  let component: TimeLeaderboardComponent;
  let fixture: ComponentFixture<TimeLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
