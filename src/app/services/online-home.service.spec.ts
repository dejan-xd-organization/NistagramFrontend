import { TestBed } from '@angular/core/testing';

import { OnlineHomeService } from './online-home.service';

describe('OnlineHomeService', () => {
  let service: OnlineHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
