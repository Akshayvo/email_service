import { TestBed } from '@angular/core/testing';

import { LeadDaysService } from './lead-days.service';

describe('LeadDaysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeadDaysService = TestBed.get(LeadDaysService);
    expect(service).toBeTruthy();
  });
});
