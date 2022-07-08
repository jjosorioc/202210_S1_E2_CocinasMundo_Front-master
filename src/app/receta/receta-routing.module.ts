import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetaDetailComponent } from './receta-detail/receta-detail.component';
import { RecetaListComponent } from './receta-list/receta-list.component';


const routes: Routes = [{
  path: 'recetas',
  children: [
    {
      path: 'list',
      component: RecetaListComponent
    },
    {
      path: ':id',
      component: RecetaDetailComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecetaRoutingModule { }
