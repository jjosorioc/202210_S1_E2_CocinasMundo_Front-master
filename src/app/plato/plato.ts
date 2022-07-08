import { CulturaCulinaria } from '../culturaculinaria/culturaculinaria';

export class Plato {
  /**
   * Constructor de un Plato
   * @param id Identificador
   * @param nombrePlato Nombre del plato
   * @param descripcionPlato Descripción del plato
   * @param precioDouble Precio
   * @param culturaCulinaria Cultura culinaria del plato
   */
  constructor(
    public id: number,
    public nombrePlato: string,
    public descripcionPlato: string,
    public precioDouble: number,
    public culturaCulinaria: CulturaCulinaria
  ) {}
}
