import { Pais } from "../pais/pais";
import { Region } from "../region/region";

export class CulturaCulinaria {

  constructor(
    public id : number,
    public nombreCultura: string,
    public descripcionCultura: string,
    public calificacionCultura: number,
    public imagen: string,
    public pais: Pais,
    public region: Region,

){}
}
