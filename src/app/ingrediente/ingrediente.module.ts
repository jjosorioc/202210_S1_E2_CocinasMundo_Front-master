import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredienteListComponent } from './ingrediente-list/ingrediente-list.component';
import { IngredienteDetailComponent } from './ingrediente-detail/ingrediente-detail.component';
import { RouterModule } from '@angular/router';
import { IngredienteRoutingModule } from './ingrediente-routing.module';

@NgModule({
  imports: [
    CommonModule, RouterModule, IngredienteRoutingModule
  ],
  declarations: [IngredienteListComponent, IngredienteDetailComponent],
  exports: [IngredienteListComponent, IngredienteDetailComponent]
})
export class IngredienteModule { }
