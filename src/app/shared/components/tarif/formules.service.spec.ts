import { TestBed } from '@angular/core/testing';

import { FormulesService } from './formules.service';

describe('TarifService', () => {
  let service: FormulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
