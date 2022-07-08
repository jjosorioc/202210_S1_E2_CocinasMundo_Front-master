import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CiudadDetail } from './ciudad-detail';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private apiUrl = environment.baseUrl + 'ciudades';
  constructor(private http: HttpClient) { }


  getCiudades(): Observable<CiudadDetail[]>
  {
    return this.http.get<CiudadDetail[]>(this.apiUrl);
  }

  getCiudad(id: string): Observable<CiudadDetail>
  {
    return this.http.get<CiudadDetail>(this.apiUrl+ '/'+ id);
  }

}

