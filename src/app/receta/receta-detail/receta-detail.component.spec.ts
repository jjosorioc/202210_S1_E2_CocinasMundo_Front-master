/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, ComponentRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';

import { RecetaDetailComponent } from './receta-detail.component';
import { RecetaDetail } from '../receta-detail';
import { Plato } from 'src/app/plato/plato';
import { CulturaCulinaria } from 'src/app/culturaculinaria/culturaculinaria';
import { Pais } from 'src/app/pais/pais';
import { Ubicacion } from 'src/app/ubicacion/ubicacion';
import { Region } from 'src/app/region/region';

describe('RecetaDetailComponent', () => {
  let component: RecetaDetailComponent;
  let fixture: ComponentFixture<RecetaDetailComponent>;
  let pais = new Pais(faker.datatype.number(),
  faker.lorem.sentence(),
  new Ubicacion(faker.datatype.number(),faker.datatype.number(),faker.datatype.number()));
  let region = new Region(faker.datatype.number(), faker.lorem.sentence());
  let cultura = new CulturaCulinaria(
    faker.datatype.number(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    faker.datatype.number(),
    faker.lorem.sentence(),
    pais,
    region
  )

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaDetailComponent);
    component = fixture.componentInstance;
    component.recetaDetail = new RecetaDetail(
      faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(),new Plato(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number(), cultura ), []);

    fixture.autoDetectChanges();
  });
});
