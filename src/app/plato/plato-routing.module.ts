import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatoDetailComponent } from './plato-detail/plato-detail.component';
import { PlatoListComponent } from './plato-list/plato-list.component';

const routes: Routes = [
  {
    path: 'platos',
    children: [
      {
        path: 'list',
        component: PlatoListComponent,
      },
      {
        path: ':id',
        component: PlatoDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatoRoutingModule {}
