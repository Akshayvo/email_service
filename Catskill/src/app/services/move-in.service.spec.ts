import { TestBed } from '@angular/core/testing';

import { MoveInService } from './move-in.service';

describe('MoveInService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoveInService = TestBed.get(MoveInService);
    expect(service).toBeTruthy();
  });
});
