import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaisDetailComponent } from './pais-detail/pais-detail.component';
import { PaisListComponent } from './pais-list/pais-list.component';

const routes: Routes = [
  {
    path: 'paises',
    children: [
      {
        path: 'list',
        component: PaisListComponent,
      },
      {
        path: ':id',
        component: PaisDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaisRoutingModule {}
