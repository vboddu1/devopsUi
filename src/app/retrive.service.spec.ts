import { TestBed, inject } from '@angular/core/testing';

import { RetriveService } from './retrive.service';

describe('RetriveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetriveService]
    });
  });

  it('should be created', inject([RetriveService], (service: RetriveService) => {
    expect(service).toBeTruthy();
  }));
});
