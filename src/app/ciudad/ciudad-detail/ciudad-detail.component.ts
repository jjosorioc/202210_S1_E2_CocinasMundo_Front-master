import { Component, OnInit, Input } from '@angular/core';
import { CiudadDetail } from '../ciudad-detail';
import { CiudadService } from '../ciudad.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ciudad-detail',
  templateUrl: './ciudad-detail.component.html',
  styleUrls: ['./ciudad-detail.component.css']
})
export class CiudadDetailComponent implements OnInit {

  ciudadId!: string;
  @Input() ciudadDetail!:  CiudadDetail;
  constructor(
    private route: ActivatedRoute,
    private ciudadService: CiudadService
  ) { }

  notUndefined() {
    return this.ciudadDetail != undefined;
  }

  getCiudad() {
    this.ciudadService.getCiudad(this.ciudadId).subscribe((ciudad) => {
      this.ciudadDetail = ciudad;
    });
  }

  ngOnInit() {
    if (this.ciudadDetail == undefined) {
      this.ciudadId

      = this.route.snapshot.paramMap.get('id')!;
      if (this.ciudadId) {
        this.getCiudad();
      }
    }
  }

}


