import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { EstrellaMichelinListComponent } from "./estrellaMichelin-list/estrellaMichelin-list.component";
import { EstrellaMichelinDetailComponent } from "./estrellaMichelin-detail/estrellaMichelin-detail.component";

const routes: Routes = [{
  path: 'estrellasMichelin',
  children: [
    {
      path: 'list',
      component: EstrellaMichelinListComponent
    },
    {
      path: ':id',
      component: EstrellaMichelinDetailComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstrellaMichelinRoutingModule { }
