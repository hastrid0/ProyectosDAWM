import { TestBed } from '@angular/core/testing';

import { RecursosedeService } from './recursosede.service';

describe('RecursosedeService', () => {
  let service: RecursosedeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursosedeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
