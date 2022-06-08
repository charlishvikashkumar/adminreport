import { TestBed } from '@angular/core/testing';

import { ReportsdataService } from './reportsdata.service';

describe('ReportsdataService', () => {
  let service: ReportsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
