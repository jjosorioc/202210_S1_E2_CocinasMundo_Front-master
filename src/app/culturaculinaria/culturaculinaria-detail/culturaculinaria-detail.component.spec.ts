/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CulturaCulinariaDetailComponent } from './culturaculinaria-detail.component';

describe('CulturaCulinariaDetailComponent', () => {
  let component: CulturaCulinariaDetailComponent;
  let fixture: ComponentFixture<CulturaCulinariaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CulturaCulinariaDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaCulinariaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});

