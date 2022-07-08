import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CulturaCulinariaDetail } from './culturaculinaria-detail';

@Injectable({
  providedIn: 'root'
})
export class CulturaCulinariaService {
  private apiUrl = environment.baseUrl+'culturasculinarias';
constructor(private http: HttpClient) { }


getCulturasCulinarias(): Observable<CulturaCulinariaDetail[]>
{
  return this.http.get<CulturaCulinariaDetail[]>(this.apiUrl);
}

getCultura(id: string): Observable<CulturaCulinariaDetail>
  {
    return this.http.get<CulturaCulinariaDetail>(this.apiUrl+ '/'+ id);
  }

}
