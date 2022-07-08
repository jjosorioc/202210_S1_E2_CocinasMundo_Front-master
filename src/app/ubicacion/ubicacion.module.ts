import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbicacionListComponent } from './ubicacion-list/ubicacion-list.component';
import { UbicacionDetailComponent } from './ubicacion-detail/ubicacion-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { UbicacionRoutingModule } from './ubicacion-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    UbicacionRoutingModule
  ],
  declarations: [UbicacionListComponent, UbicacionDetailComponent],
  exports:[UbicacionListComponent, UbicacionDetailComponent]
})
export class UbicacionModule { }
