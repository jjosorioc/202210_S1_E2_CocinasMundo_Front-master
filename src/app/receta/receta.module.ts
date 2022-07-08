import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetaListComponent } from './receta-list/receta-list.component';
import { RecetaDetailComponent } from './receta-detail/receta-detail.component';
import { RouterModule } from '@angular/router';
import { RecetaRoutingModule } from './receta-routing.module';


@NgModule({
  imports: [
    CommonModule, RouterModule, RecetaRoutingModule
  ],
  declarations: [RecetaListComponent, RecetaDetailComponent],
  exports: [RecetaListComponent, RecetaDetailComponent]
})
export class RecetaModule { }
