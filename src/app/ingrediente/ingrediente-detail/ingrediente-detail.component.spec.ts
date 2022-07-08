/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ComponentRef, DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';

import { IngredienteDetailComponent } from './ingrediente-detail.component';
import { IngredienteDetail } from '../ingrediente-detail';

describe('IngredienteDetailComponent', () => {
  let component: IngredienteDetailComponent;
  let fixture: ComponentFixture<IngredienteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IngredienteDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredienteDetailComponent);
    component = fixture.componentInstance;
    component.ingredienteDetail = new IngredienteDetail(
      faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), []);
    fixture.autoDetectChanges();
  });
});
