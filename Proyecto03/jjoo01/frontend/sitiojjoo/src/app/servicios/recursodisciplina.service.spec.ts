import { TestBed } from '@angular/core/testing';

import { RecursodisciplinaService } from './recursodisciplina.service';

describe('RecursodisciplinaService', () => {
  let service: RecursodisciplinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursodisciplinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
