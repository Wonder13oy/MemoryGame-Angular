import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    let startCountDown = () => {};
    spyOn(component, 'startCountDown');
    component.startCountDown();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the time', () => {
    let time = component;
    time.setTime(2, 0);

    expect(time.getTime()).toBe('02:00');
  });

  it('Automatically start count down', () => {
    expect(component.startCountDown()).toHaveBeenCalled();
  });
});
