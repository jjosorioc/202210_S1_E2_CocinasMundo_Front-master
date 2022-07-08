import { EstrellaMichelin } from "./estrellaMichelin";

export class EstrellaMichelinDetail extends EstrellaMichelin{

  constructor(public id: number,
    public fechaEntrega: string,
    public descripcion: string,
    public tipoEstrella: string
  )
  {
    super(id, fechaEntrega, descripcion, tipoEstrella);
  }

}
