import { Ciudad } from "../ciudad/ciudad";

export class Restaurante {

  constructor (
    public id: number,
    public nombreRestaurante: string,
    public direccionRestaurante: string,
    public ciudad: Ciudad,
    public imagen: string
  )
  {}

}
