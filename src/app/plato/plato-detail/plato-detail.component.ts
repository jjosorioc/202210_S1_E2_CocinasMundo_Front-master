import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatoDetail } from '../plato-detail';
import { PlatoService } from '../plato.service';

@Component({
  selector: 'app-plato-detail',
  templateUrl: './plato-detail.component.html',
  styleUrls: ['./plato-detail.component.css'],
})
export class PlatoDetailComponent implements OnInit {
  platoId!: string;
  @Input() platoDetail!: PlatoDetail;

  constructor(
    private route: ActivatedRoute,
    private platoService: PlatoService
  ) {}

  /**
   *
   * @returns True if platoDetail is NOT undefined
   */
  notUndefined() {
    return this.platoDetail != undefined;
  }

  getPlato() {
    this.platoService.getPlato(this.platoId).subscribe((plato) => {
      this.platoDetail = plato;
    });
  }

  ngOnInit() {
    if (this.platoDetail == undefined) {
      this.platoId = this.route.snapshot.paramMap.get('id')!;
      if (this.platoId) {
        this.getPlato();
      }
    }
  }
}
