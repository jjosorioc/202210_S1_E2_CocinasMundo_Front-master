import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CulturaCulinariaListComponent } from './culturaculinaria-list/culturaculinaria-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { CulturaCulinariaRoutingModule } from './culturaCulinaria-routing.module';
import { CulturaCulinariaDetailComponent } from './culturaculinaria-detail/culturaculinaria-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    CulturaCulinariaRoutingModule
  ],
  declarations: [CulturaCulinariaListComponent, CulturaCulinariaDetailComponent],
  exports:[CulturaCulinariaListComponent, CulturaCulinariaDetailComponent]
})
export class CulturaCulinariaModule { }
