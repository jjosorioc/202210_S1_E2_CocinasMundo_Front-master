/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EstrellaMichelinService } from './estrellaMichelin.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('Service: EstrellaMichelin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EstrellaMichelinService]
    });
  });

  it('should ...', inject([EstrellaMichelinService], (service: EstrellaMichelinService) => {
    expect(service).toBeTruthy();
  }));
});
