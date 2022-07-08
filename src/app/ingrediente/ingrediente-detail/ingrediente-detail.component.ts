import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IngredienteDetail } from '../ingrediente-detail';
import { ActivatedRoute } from '@angular/router';
import { IngredienteService } from '../ingrediente.service';

@Component({
  selector: 'app-ingrediente-detail',
  templateUrl: './ingrediente-detail.component.html',
  styleUrls: ['./ingrediente-detail.component.css']
})
export class IngredienteDetailComponent implements OnInit {

  ingredienteId!: string;
  @Input() ingredienteDetail!:  IngredienteDetail;

  constructor(
    private route: ActivatedRoute,
    private ingredienteService: IngredienteService
  ) {}

  getIngrediente() {
    this.ingredienteService.getIngrediente(this.ingredienteId).subscribe(ingrediente=>{
      this.ingredienteDetail = ingrediente;
      console.log(this.ingredienteDetail.recetas + "Estas son las recetas");
    })
  }

  ngOnInit() {
    if(this.ingredienteDetail == undefined){
      this.ingredienteId = this.route.snapshot.paramMap.get('id')!
      if(this.ingredienteId){
        this.getIngrediente();
      }
    }
  }


}
