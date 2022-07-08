import { Component, OnInit } from '@angular/core';
import { RegionDetail } from '../region-detail';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent implements OnInit {

  regiones: Array<RegionDetail> = []

  selected: Boolean = false;
  selectedRegiones!: RegionDetail;

  constructor(private regionService: RegionService) { }

  ngOnInit() {
    this.getRegiones();
  }

  getRegiones(): void {
    this.regionService.getRegiones().subscribe((regiones)=>{this.regiones=regiones;});
  }

  onClick(i: RegionDetail) {
    this.selected = true;
    this.selectedRegiones = i;
  }
}
