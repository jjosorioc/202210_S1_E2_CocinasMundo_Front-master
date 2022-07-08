import { Component, OnInit } from '@angular/core';
import { CulturaCulinariaDetail } from '../culturaculinaria-detail';
import { CulturaCulinariaService } from '../culturaculinaria.service';

@Component({
  selector: 'app-culturaculinaria-list',
  templateUrl: './culturaculinaria-list.component.html',
  styleUrls: ['./culturaculinaria-list.component.css'],
})
export class CulturaCulinariaListComponent implements OnInit {
  culturaCulinaria: Array<CulturaCulinariaDetail> = [];

  selected: Boolean = false;
  selectedCulturas!: CulturaCulinariaDetail;
  constructor(private culturaCulinariaService: CulturaCulinariaService) {}

  ngOnInit() {
    this.getCulturasCulinarias();
  }

  getCulturasCulinarias(): void {
    this.culturaCulinariaService.getCulturasCulinarias().subscribe((culturaCulinaria) => {
      this.culturaCulinaria = culturaCulinaria;
    });
  }

  onClick(i: CulturaCulinariaDetail) {
    this.selected = true;
    this.selectedCulturas = i;
  }

  exit()
  {
    this.selected = false;
  }


}
