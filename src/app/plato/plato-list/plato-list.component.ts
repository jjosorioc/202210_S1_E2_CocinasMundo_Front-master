import { Component, OnInit } from '@angular/core';
import { PlatoDetail } from '../plato-detail';
import { PlatoService } from '../plato.service';

@Component({
  selector: 'app-plato-list',
  templateUrl: './plato-list.component.html',
  styleUrls: ['./plato-list.component.css']
})
export class PlatoListComponent implements OnInit {
  platos: Array<PlatoDetail> = [];
  selectedPlato!: PlatoDetail;
  selected = false;

  constructor(private platoService: PlatoService) { }

  ngOnInit() {
    this.getPlatos();
  }


  getPlatos(): void
  {
    this.platoService.getPlatos().subscribe((platos) => {
      this.platos = platos;
      this.platos = platos.sort((a, b) => (a.nombrePlato < b.nombrePlato? -1: 1));
    });
  }

  onSelected(plato: PlatoDetail): void
  {
    this.selected = true;
    this.selectedPlato = plato;
  }

}
