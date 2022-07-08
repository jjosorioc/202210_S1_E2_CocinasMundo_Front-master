/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EstrellaMichelinListComponent } from './estrellaMichelin-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('EstrellaMichelinListComponent', () => {
  let component: EstrellaMichelinListComponent;
  let fixture: ComponentFixture<EstrellaMichelinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ EstrellaMichelinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrellaMichelinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
