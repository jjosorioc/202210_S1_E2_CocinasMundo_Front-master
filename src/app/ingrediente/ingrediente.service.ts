import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IngredienteDetail } from './ingrediente-detail';
import { RecetaDetail } from '../receta/receta-detail';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {

  private apiUrl: string = environment.baseUrl + 'ingredientes';
  constructor(private http: HttpClient) { }


  getIngredientes(): Observable<IngredienteDetail[]> {
    return this.http.get<IngredienteDetail[]>(this.apiUrl);
  }

  getIngrediente(id: string): Observable<IngredienteDetail> {
    return this.http.get<IngredienteDetail>(this.apiUrl + '/' + id);
  }
}
