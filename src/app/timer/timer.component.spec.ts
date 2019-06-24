import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimerComponent]
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

  it('should have a minute', () => {
    let minute = component.getMinutes();

    expect(minute).toBe(2);
  });

  it('should have seconds', () => {
    let seconds = component.getSeconds();

    expect(seconds).toBe(0);
  });

  it('should display 60 seconds as 1 min 00s', () => {
    let time = component;
    time.setSeconds(60);

    expect(time.getSeconds()).toBe(0);
    expect(time.getMinutes()).toBe(1);
    expect(time.getTime()).toBe('1:00');
  });

  fit('should display 1 sec as 00:01', () => {
    let time = component;
    time.setSeconds(1);

    expect(time.getTime()).toBe('00:01');
  });

  fit('should display 11 sec as 0:11', () => {
    let time = component;
    time.setSeconds(11);

    expect(time.getTime()).toBe('00:11');
  });

  fit('should display the time', () => {
    let time = component;
    time.setTime(2, 0);

    expect(time.getTime()).toBe('02:00');
  });

  it('Automatically start count down', () => {
    expect(component.startCountDown()).toHaveBeenCalled();
  });
});
