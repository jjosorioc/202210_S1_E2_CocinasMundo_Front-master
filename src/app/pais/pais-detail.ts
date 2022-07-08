import { Ciudad } from '../ciudad/ciudad';
import { CulturaCulinaria } from '../culturaculinaria/culturaculinaria';
import { Region } from '../region/region';
import { Ubicacion } from '../ubicacion/ubicacion';
import { Pais } from './pais';

export class PaisDetail extends Pais {
  ciudades: Array<Ciudad> = [];
  regiones: Array<Region> = [];
  culturasCulinarias: Array<CulturaCulinaria> = [];

  /**
   * Constructor de PaisDetail
   * @param id
   * @param nombre
   * @param ubicacion
   * @param ciudades
   * @param regiones
   * @param culturasCulinarias
   */
  constructor(
    public id: number,
    public nombre: string,
    public ubicacion: Ubicacion,
    ciudades: Ciudad[],
    regiones: Region[],
    culturasCulinarias: CulturaCulinaria[]
  ) {
    super(id, nombre, ubicacion);
    this.ciudades = ciudades;
    this.regiones = regiones;
    this.culturasCulinarias = culturasCulinarias;
  }
}
