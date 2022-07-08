import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UbicacionDetail } from './ubicacion-detail';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  private apiUrl = environment.baseUrl+'ubicaciones';
constructor(private http: HttpClient) { }


getUbicaciones(): Observable<UbicacionDetail[]>
{
  return this.http.get<UbicacionDetail[]>(this.apiUrl);
}

}
