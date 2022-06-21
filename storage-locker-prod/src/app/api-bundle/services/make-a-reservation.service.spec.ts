import { TestBed } from '@angular/core/testing';

import { MakeAReservationService } from './make-a-reservation.service';

describe('MakeAReservationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MakeAReservationService = TestBed.get(MakeAReservationService);
    expect(service).toBeTruthy();
  });
});
