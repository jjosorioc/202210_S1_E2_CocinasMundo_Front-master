import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisListComponent } from './pais-list/pais-list.component';
import { PaisDetailComponent } from './pais-detail/pais-detail.component';
import { RouterModule } from '@angular/router';
import { PaisRoutingModule } from './pais-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PaisRoutingModule
  ],
  exports:[PaisListComponent, PaisDetailComponent],
  declarations: [PaisListComponent, PaisDetailComponent]
})
export class PaisModule { }
