import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pais } from './pais';
import { PaisDetail } from './pais-detail';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl = environment.baseUrl + 'paises';
  constructor(private http: HttpClient) {}

  /**
   *
   * @returns
   */
  getPaises(): Observable<PaisDetail[]> {
    return this.http.get<PaisDetail[]>(this.apiUrl);
  }

  /**
   * Retorna un país según su id
   * @param id
   * @returns
   */
  getPais(id: string): Observable<PaisDetail>
  {
    return this.http.get<PaisDetail>(this.apiUrl+ '/'+ id);
  }
}
