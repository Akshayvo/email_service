import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

import { MoveIn } from '../models/movein';

const baseUrl = environment.baseUrl;


@Injectable({
  providedIn: 'root'
})
export class MakeAReservationService {

  private url = `${baseUrl}movein/reserve`

  constructor(private http: HttpClient) { }

  makeAReservation(MoveIn: MoveIn): Observable<any> {
    const token = localStorage.getItem('strTenantToken');

    const httpOptions = {
      headers: new HttpHeaders({
        'APIKey':  `${environment.APIKey}`,
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.post<any>(this.url, MoveIn, httpOptions);
  }
}
