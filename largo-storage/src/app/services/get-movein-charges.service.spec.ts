import { TestBed } from '@angular/core/testing';

import { GetMoveinChargesService } from './get-movein-charges.service';

describe('GetMoveinChargesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetMoveinChargesService = TestBed.get(GetMoveinChargesService);
    expect(service).toBeTruthy();
  });
});
