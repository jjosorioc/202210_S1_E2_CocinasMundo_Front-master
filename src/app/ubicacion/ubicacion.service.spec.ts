/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UbicacionService } from './ubicacion.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('Service: Ubicacion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UbicacionService]
    });
  });

  it('should ...', inject([UbicacionService], (service: UbicacionService) => {
    expect(service).toBeTruthy();
  }));
});
