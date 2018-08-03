import { TestBed, inject } from '@angular/core/testing';

import { ServiService } from './servi.service';

describe('ServiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiService]
    });
  });

  it('should be created', inject([ServiService], (service: ServiService) => {
    expect(service).toBeTruthy();
  }));
});
