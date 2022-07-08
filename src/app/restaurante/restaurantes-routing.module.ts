import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { RestauranteListComponent } from "./restaurante-list/restaurante-list.component";
import { RestauranteDetailComponent } from "./restaurante-detail/restaurante-detail.component";

const routes: Routes = [{
  path: 'restaurantes',
  children: [
    {
      path: 'list',
      component: RestauranteListComponent
    },
    {
      path: ':id',
      component: RestauranteDetailComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestauranteRoutingModule {}
