import { Restaurante } from "./restaurante";
import { Plato } from "../plato/plato";
import { CulturaCulinaria } from "../culturaculinaria/culturaculinaria";
import { Ciudad } from "../ciudad/ciudad";
import { EstrellaMichelin } from "../estrellaMichelin/estrellaMichelin";

export class RestauranteDetail extends Restaurante {

  platos: Array<Plato> = [];
  culturasCulinarias: Array<CulturaCulinaria> = [];
  estrellaMichelin: Array<EstrellaMichelin> = [];

  constructor (
    public id: number,
    public nombreRestaurante: string,
    public direccionRestaurante: string,
    public ciudad: Ciudad,
    public imagen: string,
    platos: Plato[],
    culturasCulinarias: CulturaCulinaria[],
    estrellaMichelin: EstrellaMichelin[]
  ) {
    super(id, nombreRestaurante, direccionRestaurante, ciudad, imagen);
    this.platos = platos;
    this.culturasCulinarias = culturasCulinarias;
    this.estrellaMichelin = estrellaMichelin;
  }
}
