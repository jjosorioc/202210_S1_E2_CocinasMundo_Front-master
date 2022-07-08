import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiudadListComponent } from './ciudad-list/ciudad-list.component';
import { CiudadDetailComponent } from './ciudad-detail/ciudad-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { CiudadRoutingModule } from './ciudad-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    CiudadRoutingModule
  ],
  declarations: [CiudadListComponent, CiudadDetailComponent],
  exports:[CiudadListComponent, CiudadDetailComponent]
})
export class CiudadModule { }
