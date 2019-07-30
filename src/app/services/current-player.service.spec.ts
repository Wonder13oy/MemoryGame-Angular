import { TestBed } from '@angular/core/testing';

import { CurrentPlayerService } from './current-player.service';

describe('CurrentPlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentPlayerService = TestBed.get(CurrentPlayerService);
    expect(service).toBeTruthy();
  });

  fit('should create an new player', () => {
    let player = new CurrentPlayerService('Wandile');

    expect(player.getName()).toBe('Wandile');
  });
});
