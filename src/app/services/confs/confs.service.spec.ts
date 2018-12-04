import { TestBed, inject } from '@angular/core/testing';

import { ConfsService } from './confs.service';

describe('ConfsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfsService]
    });
  });

  it('should be created', inject([ConfsService], (service: ConfsService) => {
    expect(service).toBeTruthy();
  }));
});
