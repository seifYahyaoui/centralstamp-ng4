import { TestBed, inject } from '@angular/core/testing';

import { HttpCoreApiService } from './http-core-api.service';

describe('HttpCoreApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpCoreApiService]
    });
  });

  it('should ...', inject([HttpCoreApiService], (service: HttpCoreApiService) => {
    expect(service).toBeTruthy();
  }));
});
