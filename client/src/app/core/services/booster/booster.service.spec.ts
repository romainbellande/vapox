import { TestBed, inject } from '@angular/core/testing';

import { BoosterService } from './booster.service';

describe('BoosterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoosterService]
    });
  });

  it('should be created', inject([BoosterService], (service: BoosterService) => {
    expect(service).toBeTruthy();
  }));
});
