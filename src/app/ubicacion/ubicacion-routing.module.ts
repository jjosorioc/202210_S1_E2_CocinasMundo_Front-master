import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UbicacionListComponent } from './ubicacion-list/ubicacion-list.component';

const routes: Routes = [{
  path: 'ubicaciones',
  children: [
    {
      path: 'list',
      component: UbicacionListComponent
    },
    {
      path: 'id',
      component: UbicacionListComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UbicacionRoutingModule { }
