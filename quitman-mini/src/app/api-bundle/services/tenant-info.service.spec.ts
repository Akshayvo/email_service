import { TestBed } from '@angular/core/testing';

import { TenantInfoService } from './tenant-info.service';

describe('TenantInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TenantInfoService = TestBed.get(TenantInfoService);
    expect(service).toBeTruthy();
  });
});
