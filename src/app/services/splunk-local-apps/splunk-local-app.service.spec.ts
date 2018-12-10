import { TestBed, inject } from '@angular/core/testing';

import { SplunkLocalAppService } from './splunk-local-app.service';

describe('SplunkLocalAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SplunkLocalAppService]
    });
  });

  it('should be created', inject([SplunkLocalAppService], (service: SplunkLocalAppService) => {
    expect(service).toBeTruthy();
  }));
});
