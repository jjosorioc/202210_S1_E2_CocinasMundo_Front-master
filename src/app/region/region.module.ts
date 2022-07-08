import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionListComponent } from './region-list/region-list.component';
import { RegionDetailComponent } from './region-detail/region-detail.component';
import { RouterModule } from '@angular/router';
import { RegionRoutingModule } from './region-routing.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    RouterModule,
    RegionRoutingModule
  ],
  declarations: [RegionListComponent, RegionDetailComponent],
  exports:[RegionListComponent, RegionDetailComponent]
})
export class RegionModule { }
