import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../restaurante';
import { RestauranteService } from '../restaurante.service';
import { RestauranteDetail } from '../restaurante-detail';

@Component({
  selector: 'app-restaurante-list',
  templateUrl: './restaurante-list.component.html',
  styleUrls: ['./restaurante-list.component.css']
})
export class RestauranteListComponent implements OnInit {
  restaurantes: Array<RestauranteDetail> = [];
  selectedRestaurante!: RestauranteDetail;
  selected: Boolean = false;
  home: Boolean = true;
  restaurantes1: Boolean = false;
  estrellas: Boolean = false;

  constructor(private restauranteService: RestauranteService) { }

  ngOnInit() {
    this.getRestaurantes();
    this.home = true;
  }

  getRestaurantes(): void {
    this.restauranteService.getRestaurantes().subscribe((restaurantes) => {
      this.restaurantes = restaurantes;
    })
  }

  onClick(restaurante: RestauranteDetail) {
    this.selected = true;
    this.selectedRestaurante = restaurante;

  }

  todosR(){
    this.restaurantes1 = true;
    this.estrellas = false;
    this.home = false;
  }

  estrellasR(){
    this.estrellas = true;
    this.restaurantes1 = false;
    this.home = false;
  }

  restaurantesEstrellas(restaurantes: any[]): any[] {
    return restaurantes.filter(p => p.estrellaMichelin.length > 0);
  }

  exit()
  {
    this.selected = false;
  }


}
