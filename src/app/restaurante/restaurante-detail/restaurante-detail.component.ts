import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestauranteDetail } from '../restaurante-detail';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-restaurante-detail',
  templateUrl: './restaurante-detail.component.html',
  styleUrls: ['./restaurante-detail.component.css']
})
export class RestauranteDetailComponent implements OnInit {

  restauranteId!: string;
  @Input() restauranteDetail!: RestauranteDetail;

  constructor(
    private route: ActivatedRoute,
    private restauranteService: RestauranteService
  ) { }

  getRestaurante() {
    this.restauranteService.getRestaurante(this.restauranteId).subscribe(ingrediente=>{
      this.restauranteDetail = ingrediente;
    })
  }

  ngOnInit() {
    if(this.restauranteDetail == undefined){
      this.restauranteId = this.route.snapshot.paramMap.get('id')!
      if(this.restauranteId){
        this.getRestaurante();
      }
    }
  }
}
