import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionDetailComponent } from './region-detail/region-detail.component';
import { RegionListComponent } from './region-list/region-list.component';

const routes: Routes = [
  {
  path: 'regiones',
  children: [
    {
      path: 'list',
      component: RegionListComponent,
    },
    {
      path: ':id',
      component: RegionDetailComponent,
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionRoutingModule { }
