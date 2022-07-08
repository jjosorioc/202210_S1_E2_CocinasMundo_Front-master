import { Component, OnInit } from '@angular/core';
import { EstrellaMichelin } from '../estrellaMichelin';
import { EstrellaMichelinService } from '../estrellaMichelin.service';
import { EstrellaMichelinDetail } from '../estrellaMichelin-detail';

@Component({
  selector: 'app-estrellaMichelin-list',
  templateUrl: './estrellaMichelin-list.component.html',
  styleUrls: ['./estrellaMichelin-list.component.css']
})
export class EstrellaMichelinListComponent implements OnInit {

  estrellasMichelin: Array<EstrellaMichelinDetail> = [];
  selectedEstrellasMichelin!: EstrellaMichelinDetail;
  selected: Boolean = false;

  constructor(private estrellaMichelinService: EstrellaMichelinService) { }

  ngOnInit() {
    this.getEstrellasMichelin();
  }

  getEstrellasMichelin(): void {
    this.estrellaMichelinService.getEstrellasMichelin().subscribe((estrellasMichelin) => {this.estrellasMichelin = estrellasMichelin;})
  }

  onSelected(estrellaMichelin: EstrellaMichelinDetail) {
  this.selected = true;
  this.selectedEstrellasMichelin = estrellaMichelin;
}


}
