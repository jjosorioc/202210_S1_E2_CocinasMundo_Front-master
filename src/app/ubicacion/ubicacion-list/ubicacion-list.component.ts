import { Component, OnInit } from '@angular/core';
import { UbicacionDetail } from '../ubicacion-detail';
import { UbicacionService } from '../ubicacion.service';

@Component({
  selector: 'app-ubicacion-list',
  templateUrl: './ubicacion-list.component.html',
  styleUrls: ['./ubicacion-list.component.css'],
})
export class UbicacionListComponent implements OnInit {
  ubicaciones: Array<UbicacionDetail> = [];

  selected: Boolean = false;
  selectedUbicaciones!: UbicacionDetail;
  constructor(private ubicacionService: UbicacionService) {}

  ngOnInit() {
    this.getUbicaciones();
  }

  getUbicaciones(): void {
    this.ubicacionService.getUbicaciones().subscribe((ubicaciones) => {
      this.ubicaciones = ubicaciones;
    });
  }

  onClick(i: UbicacionDetail) {
    this.selected = true;
    this.selectedUbicaciones = i;
  }
}
