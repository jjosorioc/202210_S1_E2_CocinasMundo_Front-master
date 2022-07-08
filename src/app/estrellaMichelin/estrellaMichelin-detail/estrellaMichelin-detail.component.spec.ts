/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EstrellaMichelinDetailComponent } from './estrellaMichelin-detail.component';

describe('EstrellaMichelinDetailComponent', () => {
  let component: EstrellaMichelinDetailComponent;
  let fixture: ComponentFixture<EstrellaMichelinDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrellaMichelinDetailComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrellaMichelinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
