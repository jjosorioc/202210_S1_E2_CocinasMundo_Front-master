import { Component, OnInit, Input } from '@angular/core';
import { UbicacionDetail } from '../ubicacion-detail';

@Component({
  selector: 'app-ubicacion-detail',
  templateUrl: './ubicacion-detail.component.html',
  styleUrls: ['./ubicacion-detail.component.css']
})
export class UbicacionDetailComponent implements OnInit {

  @Input() ubicacionDetail!:  UbicacionDetail;
  constructor() { }

  ngOnInit() {
  }

}
