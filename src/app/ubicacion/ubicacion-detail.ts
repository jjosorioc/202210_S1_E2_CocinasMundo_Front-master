import { Ubicacion } from "./ubicacion";

export class UbicacionDetail extends Ubicacion{
  constructor(
    public id: number,
    public latitudUbicacion: number,
    public longitudUbicacion: number,

)
{
  super(id, latitudUbicacion, longitudUbicacion)
}
}
