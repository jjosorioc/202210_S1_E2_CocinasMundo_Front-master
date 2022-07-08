import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteListComponent } from './restaurante-list/restaurante-list.component';
import { RestauranteDetailComponent } from './restaurante-detail/restaurante-detail.component';
import { RouterModule } from '@angular/router';
import { RestauranteRoutingModule } from './restaurantes-routing.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    RouterModule,
    RestauranteRoutingModule
  ],
  exports: [RestauranteListComponent, RestauranteDetailComponent],
  declarations: [RestauranteListComponent, RestauranteDetailComponent]
})
export class RestauranteModule { }
