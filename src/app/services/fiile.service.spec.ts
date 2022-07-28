import { TestBed } from '@angular/core/testing';

import { FiileService } from './fiile.service';

describe('FiileService', () => {
  let service: FiileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
