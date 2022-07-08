import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisDetail } from '../pais-detail';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-pais-detail',
  templateUrl: './pais-detail.component.html',
  styleUrls: ['./pais-detail.component.css'],
})
export class PaisDetailComponent implements OnInit {
  paisId!: string;
  @Input() paisDetail!: PaisDetail;

  constructor(
    private route: ActivatedRoute,
    private paisService: PaisService
  ) {}

  /**
   *
   * @returns True if paisDetail is NOT undefined
   */
  notUndefined() {
    return this.paisDetail != undefined;
  }

  getPais() {
    this.paisService.getPais(this.paisId).subscribe((pais) => {
      this.paisDetail = pais;
    });
  }

  ngOnInit() {
    if (this.paisDetail == undefined) {
      this.paisId = this.route.snapshot.paramMap.get('id')!;
      if (this.paisId) {
        this.getPais();
      }
    }
  }
}
