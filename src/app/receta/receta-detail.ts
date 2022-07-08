import { Ingrediente } from "../ingrediente/ingrediente";
import { IngredienteDetail } from "../ingrediente/ingrediente-detail";
import { Plato } from "../plato/plato";
import { Receta } from "./receta";

export class RecetaDetail extends Receta {
  public ingredientes: Array<Ingrediente> = [];
  constructor(
  id: number,
	nombre: string,
	descripcion: string,
	preparacion: string,
	imagenes: string,
	plato: Plato,
  ingredientes: Ingrediente[]
  ) {
    super(id, nombre, descripcion, preparacion, imagenes, plato);
    this.ingredientes = ingredientes;
  }
}
