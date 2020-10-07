import { TestBed } from '@angular/core/testing';

import { WorldFieldService } from './world-field.service';

describe('WorldFieldService', () => {
  let service: WorldFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
