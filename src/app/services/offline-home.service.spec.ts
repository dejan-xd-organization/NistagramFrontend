import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OfflineHomeService } from './offline-home.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('OfflineHomeService', () => {
  let service: OfflineHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    service = TestBed.inject(OfflineHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
