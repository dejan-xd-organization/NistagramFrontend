import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OnlineHomeService } from './online-home.service';

describe('OnlineHomeService', () => {
  let service: OnlineHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(OnlineHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
