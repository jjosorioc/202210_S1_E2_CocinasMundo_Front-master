import { Component, OnInit, Input } from '@angular/core';
import { CulturaCulinariaDetail } from '../culturaculinaria-detail';
import { ActivatedRoute } from '@angular/router';
import { CulturaCulinariaService } from '../culturaculinaria.service';

@Component({
  selector: 'app-culturaculinaria-detail',
  templateUrl: './culturaculinaria-detail.component.html',
  styleUrls: ['./culturaculinaria-detail.component.css']
})
export class CulturaCulinariaDetailComponent implements OnInit {

  culturaId!: string;
  @Input() culturaCulinariaDetail!:  CulturaCulinariaDetail;
  constructor(
    private route: ActivatedRoute,
    private culturaService: CulturaCulinariaService
  ) { }

  notUndefined() {
    return this.culturaCulinariaDetail != undefined;
  }

  getCultura() {
    this.culturaService.getCultura(this.culturaId).subscribe((cultura) => {
      this.culturaCulinariaDetail = cultura;
    });
  }

  ngOnInit() {
    if (this.culturaCulinariaDetail == undefined) {
      this.culturaId

      = this.route.snapshot.paramMap.get('id')!;
      if (this.culturaId) {
        this.getCultura();
      }
    }
  }

}
