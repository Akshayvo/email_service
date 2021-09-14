import { TestBed } from '@angular/core/testing';

import { UaParserService } from './ua-parser.service';

describe('UaParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UaParserService = TestBed.get(UaParserService);
    expect(service).toBeTruthy();
  });
});
