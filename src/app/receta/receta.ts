import { Plato } from "../plato/plato";

export class Receta {
  constructor(
  public id: number,
	public nombre: string,
	public descripcion: string,
	public preparacion: string,
	public imagenes: string,
	public plato: Plato
  ) {}
}
