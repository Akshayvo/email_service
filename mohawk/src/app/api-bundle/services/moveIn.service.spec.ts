import { TestBed } from '@angular/core/testing';

import { MoveInService } from './moveIn.service';

describe('GetMoveinChargesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoveInService = TestBed.get(MoveInService);
    expect(service).toBeTruthy();
  });
});
