import { Ciudad } from "./ciudad";
import { Ubicacion } from "../ubicacion/ubicacion";
import { Pais } from "../pais/pais";

export class CiudadDetail extends Ciudad
{

  constructor(
    public id: number,
    public nombre: string,
    public pais: Pais,
    public ubicacion: Ubicacion

  )
  {
    super(id, nombre, pais, ubicacion);

  }
}
