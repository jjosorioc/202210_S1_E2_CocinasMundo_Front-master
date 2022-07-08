import { Pais } from "../pais/pais";
import { Ubicacion } from "../ubicacion/ubicacion";

export class Ciudad {

  constructor(
    public id: number,
    public nombre: string,
    public pais: Pais,
    public ubicacion: Ubicacion
  )
  {}
}
