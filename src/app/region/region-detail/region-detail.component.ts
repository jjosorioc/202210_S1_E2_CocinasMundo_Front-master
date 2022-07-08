import { Component, OnInit, Input } from '@angular/core';
import { RegionDetail } from '../region-detail';
import { RegionService } from '../region.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-region-detail',
  templateUrl: './region-detail.component.html',
  styleUrls: ['./region-detail.component.css']
})
export class RegionDetailComponent implements OnInit {

  regionId! : string;
  @Input() regionDetail!:  RegionDetail;
  constructor(
    private route: ActivatedRoute,
    private regionService: RegionService
  ) { }

  notUndefined() {
    return this.regionDetail != undefined;
  }

  getRegion() {
    this.regionService.getRegion(this.regionId).subscribe((region) => {
      this.regionDetail = region;
    });
  }

  ngOnInit() {
    if (this.regionDetail == undefined) {
      this.regionId

      = this.route.snapshot.paramMap.get('id')!;
      if (this.regionId) {
        this.getRegion();
      }
    }
  }

}
