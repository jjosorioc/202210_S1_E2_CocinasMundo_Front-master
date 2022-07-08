import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstrellaMichelinListComponent } from './estrellaMichelin-list/estrellaMichelin-list.component';
import { EstrellaMichelinDetailComponent } from './estrellaMichelin-detail/estrellaMichelin-detail.component';
import { RouterModule } from '@angular/router';
import { EstrellaMichelinRoutingModule } from './estrellaMichelin-routing.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    RouterModule,
    EstrellaMichelinRoutingModule
  ],
  exports: [EstrellaMichelinListComponent, EstrellaMichelinDetailComponent],
  declarations: [EstrellaMichelinListComponent, EstrellaMichelinDetailComponent]
})
export class EstrellaMichelinModule { }
