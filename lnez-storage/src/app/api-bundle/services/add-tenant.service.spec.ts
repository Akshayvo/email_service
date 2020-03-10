import { TestBed } from '@angular/core/testing';

import { AddTenantService } from './add-tenant.service';

describe('AddTenantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddTenantService = TestBed.get(AddTenantService);
    expect(service).toBeTruthy();
  });
});
