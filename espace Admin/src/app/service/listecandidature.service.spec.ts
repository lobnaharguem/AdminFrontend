import { TestBed } from '@angular/core/testing';

import { ListecandidatureService } from './listecandidature.service';

describe('ListecandidatureService', () => {
  let service: ListecandidatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListecandidatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
