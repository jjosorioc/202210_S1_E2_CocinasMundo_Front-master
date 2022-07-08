import { Ubicacion } from '../ubicacion/ubicacion';

export class Pais {
  /**
   * Constructor de Pais.
   * @param id Identificador del país
   * @param nombre  Nombre del país
   * @param ubicacion Ubicación del país.
   */
  constructor(
    public id: number,
    public nombre: string,
    public ubicacion: Ubicacion
  ) {}
}
