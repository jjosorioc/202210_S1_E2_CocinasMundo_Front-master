/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlatoDetailComponent } from './plato-detail.component';

describe('PlatoDetailComponent', () => {
  let component: PlatoDetailComponent;
  let fixture: ComponentFixture<PlatoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlatoDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
