import { TestBed } from '@angular/core/testing';

import { PiezometrieService } from './piezometrie.service';

describe('PiezometrieService', () => {
  let service: PiezometrieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiezometrieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
