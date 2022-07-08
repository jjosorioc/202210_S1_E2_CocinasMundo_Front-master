import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredienteModule } from './ingrediente/ingrediente.module';
import { RecetaModule } from './receta/receta.module';
import { PaisModule } from './pais/pais.module';
import { PlatoModule } from './plato/plato.module';
import { UbicacionModule } from './ubicacion/ubicacion.module';
import { CiudadModule } from './ciudad/ciudad.module';
import { CulturaCulinariaModule } from './culturaculinaria/culturaculinaria.module';
import { RegionModule } from './region/region.module';
import { CiudadRoutingModule } from './ciudad/ciudad-routing.module';
import { RestauranteModule } from './restaurante/restaurante.module';
import { EstrellaMichelinModule } from './estrellaMichelin/estrellaMichelin.module';
import { RestauranteRoutingModule } from './restaurante/restaurantes-routing.module';
import { EstrellaMichelinRoutingModule } from './estrellaMichelin/estrellaMichelin-routing.module';
import { RegionRoutingModule } from './region/region-routing.module';
import { UbicacionRoutingModule } from './ubicacion/ubicacion-routing.module';
import { CulturaCulinariaRoutingModule } from './culturaculinaria/culturaCulinaria-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IngredienteModule,
    RecetaModule,
    PaisModule,
    PlatoModule,
    UbicacionModule,
    CiudadModule,
    CulturaCulinariaModule,
    RegionModule,
    RestauranteModule,
    EstrellaMichelinModule,
    RestauranteRoutingModule,
    EstrellaMichelinRoutingModule,
    RegionRoutingModule,
    CiudadRoutingModule,
    UbicacionRoutingModule,
    CulturaCulinariaRoutingModule,
    RestauranteRoutingModule,
    EstrellaMichelinRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
