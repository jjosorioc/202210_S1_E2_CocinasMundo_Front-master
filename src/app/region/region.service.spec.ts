/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegionService } from './region.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Region', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegionService]
    });
  });

  it('should ...', inject([RegionService], (service: RegionService) => {
    expect(service).toBeTruthy();
  }));
});
