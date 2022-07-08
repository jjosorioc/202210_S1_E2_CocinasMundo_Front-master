import { Component, OnInit } from '@angular/core';
import { RecetaDetail } from '../receta-detail';
import { RecetaService } from '../receta.service';

@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrls: ['./receta-list.component.css']
})
export class RecetaListComponent implements OnInit {

  recetas: Array<RecetaDetail> = []

  selected: boolean = false;
  selectedReceta!: RecetaDetail;
  constructor(private recetaService: RecetaService) { }

  ngOnInit() {
    this.getRecetas();
  }

  getRecetas():void {
    this.recetaService.getRecetas().subscribe((recetas)=>{
      this.recetas=recetas;
    })
  }

  onClick(r: RecetaDetail) {
    this.selected = true;
    this.selectedReceta = r;
  }
}
