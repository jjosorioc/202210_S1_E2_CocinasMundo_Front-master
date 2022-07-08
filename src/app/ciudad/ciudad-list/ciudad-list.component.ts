import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../ciudad';
import { CiudadDetail } from '../ciudad-detail';
import { CiudadService } from '../ciudad.service';

@Component({
  selector: 'app-ciudad-list',
  templateUrl: './ciudad-list.component.html',
  styleUrls: ['./ciudad-list.component.css'],
})
export class CiudadListComponent implements OnInit {
  ciudades: Array<CiudadDetail> = [];

  selected: Boolean = false;
  selectedCiudades!: CiudadDetail;

  constructor(private ciudadService: CiudadService) {}

  ngOnInit() {
    this.getCiudades();
  }

  getCiudades(): void {
    this.ciudadService.getCiudades().subscribe((ciudades) => {
      this.ciudades = ciudades;
    });
  }

  onClick(i: CiudadDetail) {
    this.selected = true;
    this.selectedCiudades = i;
  }
}
