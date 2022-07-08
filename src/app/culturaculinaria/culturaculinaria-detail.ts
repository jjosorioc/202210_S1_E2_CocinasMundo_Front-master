import { Plato } from "../plato/plato";
import { Pais } from "../pais/pais";
import { CulturaCulinaria } from "./culturaculinaria";
import { Restaurante } from "../restaurante/restaurante";
import { Region } from "../region/region";

export class CulturaCulinariaDetail extends CulturaCulinaria{

  public recetasMasRepresentativas: Array<Plato> = [];
  public restaurantes: Array<Restaurante> = [];

  constructor(
     id : number,
     nombreCultura: string,
     descripcionCultura: string,
     calificacionCultura: number,
     imagen: string,
     pais: Pais,
     recetasMasRepresentativas: Plato[],
     region: Region,
     restaurantes: Restaurante[]

){
  super(id, nombreCultura, descripcionCultura, calificacionCultura, imagen, pais, region);
  this.recetasMasRepresentativas = recetasMasRepresentativas;
  this.restaurantes = restaurantes;
}
}
