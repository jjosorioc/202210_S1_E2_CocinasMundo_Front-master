import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredienteDetailComponent } from './ingrediente-detail/ingrediente-detail.component';
import { IngredienteListComponent } from './ingrediente-list/ingrediente-list.component';


const routes: Routes = [{
  path: 'ingredientes',
  children: [
    {
      path: 'list',
      component: IngredienteListComponent
    },
    {
      path: ':id',
      component: IngredienteDetailComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredienteRoutingModule { }
