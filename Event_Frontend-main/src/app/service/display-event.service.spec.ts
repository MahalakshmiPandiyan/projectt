import { TestBed } from '@angular/core/testing';

import { DisplayEventService } from './display-event.service';

describe('DisplayEventService', () => {
  let service: DisplayEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
