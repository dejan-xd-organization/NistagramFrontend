import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OfflineHomeService } from './offline-home.service';

describe('OfflineHomeService', () => {
  let service: OfflineHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(OfflineHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
