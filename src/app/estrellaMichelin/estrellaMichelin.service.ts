import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EstrellaMichelinDetail } from './estrellaMichelin-detail';

@Injectable({
  providedIn: 'root'
})
export class EstrellaMichelinService {
  private apiUrl: string = environment.baseUrl + 'estrellamichelin';

  constructor(private http: HttpClient) { }

  getEstrellasMichelin(): Observable<EstrellaMichelinDetail[]> {
    return this.http.get<EstrellaMichelinDetail[]>(this.apiUrl);
  }

}
