import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../ingrediente';
import { IngredienteDetail } from '../ingrediente-detail';
import { IngredienteService } from '../ingrediente.service';

@Component({
  selector: 'app-ingrediente-list',
  templateUrl: './ingrediente-list.component.html',
  styleUrls: ['./ingrediente-list.component.css'],
})
export class IngredienteListComponent implements OnInit {
  ingredientes: Array<IngredienteDetail> = [];

  selected: Boolean = false;
  selectedIngrediente!: IngredienteDetail;

  constructor(private ingredienteService: IngredienteService) {}

  ngOnInit() {
    this.getIngredientes();
  }

  getIngredientes(): void {
    this.ingredienteService.getIngredientes().subscribe((ingredientes) => {
      this.ingredientes = ingredientes;
    });
  }

  onClick(i: IngredienteDetail) {
    this.selected = true;
    this.selectedIngrediente = i;
    console.log(i.recetas);
  }
}
