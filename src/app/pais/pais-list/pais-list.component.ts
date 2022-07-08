import { Component, OnInit } from '@angular/core';
import { Pais } from '../pais';
import { PaisDetail } from '../pais-detail';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css'],
})
export class PaisListComponent implements OnInit {
  paises: Array<PaisDetail> = [];
  selectedPais!: PaisDetail;
  selected = false;

  constructor(private paisService: PaisService) {}

  ngOnInit() {
    this.getPaises();
  }

  getPaises(): void {
    this.paisService.getPaises().subscribe((paises) => {
      this.paises = paises;
      this.paises = paises.sort((a, b) => (a.nombre < b.nombre?-1:1));
    });
  }

  onSelected(pais: PaisDetail): void
  {
    this.selected = true;
    this.selectedPais = pais;

  }
}
