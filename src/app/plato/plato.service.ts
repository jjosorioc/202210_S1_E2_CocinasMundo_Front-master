import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlatoDetail } from './plato-detail';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {
  private apiUrl: string = environment.baseUrl+ 'platos';
  constructor(private http: HttpClient) { }

  /**
   *
   * @returns Los platos de la base de datos
   */
  getPlatos(): Observable<PlatoDetail[]>
  {
    return this.http.get<PlatoDetail[]>(this.apiUrl);
  }

  /**
   *Retorna un plato según su id
   * @param id
   * @returns
   */
  getPlato(id: string): Observable<PlatoDetail>
  {
    return this.http.get<PlatoDetail>(this.apiUrl + "/"+ id);
  }
}
