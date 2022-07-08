import { Component, Input, OnInit } from '@angular/core';
import { EstrellaMichelinDetail } from '../estrellaMichelin-detail';

@Component({
  selector: 'app-estrellaMichelin-detail',
  templateUrl: './estrellaMichelin-detail.component.html',
  styleUrls: ['./estrellaMichelin-detail.component.css']
})
export class EstrellaMichelinDetailComponent implements OnInit {

  @Input() estrellaMichelinDetail!: EstrellaMichelinDetail;
  constructor() { }

  ngOnInit() {
  }

}
