import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RegionDetail } from './region-detail';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private apiUrl: string = environment.baseUrl + 'regiones';

  constructor(private http: HttpClient) { }

  getRegiones(): Observable<RegionDetail[]> {
    return this.http.get<RegionDetail[]>(this.apiUrl);
  }

  getRegion(id: string): Observable<RegionDetail>
  {
    return this.http.get<RegionDetail>(this.apiUrl+ '/'+ id);
  }
}

