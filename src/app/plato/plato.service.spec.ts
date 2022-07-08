/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlatoService } from './plato.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Plato', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlatoService],
    });
  });

  it('should ...', inject([PlatoService], (service: PlatoService) => {
    expect(service).toBeTruthy();
  }));
});
