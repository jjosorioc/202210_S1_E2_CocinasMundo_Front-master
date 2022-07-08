/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CulturaCulinariaService } from './culturaculinaria.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: CulturaCulinaria', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CulturaCulinariaService]
    });
  });

  it('should ...', inject([CulturaCulinariaService], (service: CulturaCulinariaService) => {
    expect(service).toBeTruthy();
  }));
});
