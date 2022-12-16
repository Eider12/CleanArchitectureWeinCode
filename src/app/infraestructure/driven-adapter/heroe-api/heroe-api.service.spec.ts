import { TestBed } from '@angular/core/testing';

import { HeroeApiService } from './heroe-api.service';

describe('HeroeApiService', () => {
  let service: HeroeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
