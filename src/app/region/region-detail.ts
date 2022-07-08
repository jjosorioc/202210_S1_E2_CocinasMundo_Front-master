import { Pais } from "../pais/pais";
import { Region } from "./region";
import { CulturaCulinaria } from "../culturaculinaria/culturaculinaria";

export class RegionDetail extends Region {

  paises: Array<Pais> = [];
  culturasCulinarias: Array<CulturaCulinaria> = [];

  /**
   * Constructor de PaisDetail
   * @param id
   * @param nombre
   */
  constructor(
    public id: number,
    public nombre: string,
    paises: Pais[],
    culturasCulinarias: CulturaCulinaria[]
  ) {
    super(id, nombre);
    this.paises = paises;
    this.culturasCulinarias = culturasCulinarias;
  }

}
