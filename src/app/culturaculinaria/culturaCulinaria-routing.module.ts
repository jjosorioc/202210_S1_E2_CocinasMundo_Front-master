import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CulturaCulinariaDetailComponent } from './culturaculinaria-detail/culturaculinaria-detail.component';
import { CulturaCulinariaListComponent } from './culturaculinaria-list/culturaculinaria-list.component';


const routes: Routes = [
  {
  path: 'culturasculinarias',
  children: [
    {
      path: 'list',
      component: CulturaCulinariaListComponent,
    },
    {
      path: ':id',
      component: CulturaCulinariaDetailComponent,
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CulturaCulinariaRoutingModule { }
