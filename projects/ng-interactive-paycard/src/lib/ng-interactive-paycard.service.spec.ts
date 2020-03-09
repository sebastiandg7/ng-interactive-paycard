import { TestBed } from '@angular/core/testing';

import { NgInteractivePaycardService } from './ng-interactive-paycard.service';

describe('NgInteractivePaycardService', () => {
  let service: NgInteractivePaycardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgInteractivePaycardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
