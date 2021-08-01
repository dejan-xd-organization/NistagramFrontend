import { TestBed } from '@angular/core/testing';

import { OfflineHomeService } from './offline-home.service';

describe('OfflineHomeService', () => {
  let service: OfflineHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfflineHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
