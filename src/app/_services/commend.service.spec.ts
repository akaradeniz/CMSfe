import { TestBed } from '@angular/core/testing';

import { CommendService } from './commend.service';

describe('CommendService', () => {
  let service: CommendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
