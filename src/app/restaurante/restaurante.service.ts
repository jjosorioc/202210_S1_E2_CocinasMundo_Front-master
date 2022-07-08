import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestauranteDetail } from './restaurante-detail';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  private apiUrl: string = environment.baseUrl + 'restaurantes';

  constructor(private http: HttpClient) { }

  getRestaurantes(): Observable<RestauranteDetail[]> {
    return this.http.get<RestauranteDetail[]>(this.apiUrl);
  }

  getRestaurante(id: string): Observable<RestauranteDetail> {
    return this.http.get<RestauranteDetail>(this.apiUrl + '/' + id);
  }
}
