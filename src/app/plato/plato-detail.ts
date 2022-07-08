import { CulturaCulinaria } from '../culturaculinaria/culturaculinaria';
import { RecetaDetail } from '../receta/receta-detail';
import { RestauranteDetail } from '../restaurante/restaurante-detail';
import { Plato } from './plato';

export class PlatoDetail extends Plato {
  recetas: Array<RecetaDetail> = [];
  restaurantes: Array<RestauranteDetail> = [];

  /**
   * Constructor para PlatoDetail
   * @param id
   * @param nombrePlato
   * @param descripcionPlato
   * @param precioDouble
   * @param culturaCulinaria
   * @param recetas
   * @param restaurantes
   */
  constructor(
    id: number,
    nombrePlato: string,
    descripcionPlato: string,
    precioDouble: number,
    public culturaCulinaria: CulturaCulinaria,
    recetas: RecetaDetail[],
    restaurantes: RestauranteDetail[]
  ) {
    super(id, nombrePlato, descripcionPlato, precioDouble, culturaCulinaria);
    this.recetas = recetas;
    this.restaurantes = restaurantes;
  }
}
