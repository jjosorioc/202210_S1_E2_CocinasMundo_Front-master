import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatoListComponent } from './plato-list/plato-list.component';
import { PlatoDetailComponent } from './plato-detail/plato-detail.component';
import { RouterModule } from '@angular/router';
import { PlatoRoutingModule } from './plato-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PlatoRoutingModule
  ],
  exports: [PlatoListComponent, PlatoDetailComponent],
  declarations: [PlatoListComponent, PlatoDetailComponent]
})
export class PlatoModule { }
