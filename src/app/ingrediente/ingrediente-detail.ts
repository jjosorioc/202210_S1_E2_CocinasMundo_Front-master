import { Ingrediente } from "./ingrediente";
import { Receta } from "../receta/receta";
import { RecetaDetail } from "../receta/receta-detail";

export class IngredienteDetail extends Ingrediente {
  public recetas: Array<RecetaDetail> = [];
  constructor(
    id: number,
    nombre: string,
    categoria: string,
    historia: string,
    marcasRepresentativas: string,
    recetas: RecetaDetail[]) {
    super(id, nombre, categoria, historia, marcasRepresentativas);
    this.recetas = recetas;
  }
}
