import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

import { StrConfirmation } from '../models/movein';

const baseUrl = environment.baseUrl;


@Injectable({
  providedIn: 'root'
})
export class MakeAReservationService {

  private url = `${baseUrl}movein/reserve`

  constructor(private http: HttpClient) { }

  makeAReservation(StrConfirmation: StrConfirmation): Observable<any> {
    const token = localStorage.getItem('strTempTenantToken') || localStorage.getItem('strTenantToken');

    const httpOptions = {
      headers: new HttpHeaders({
        'APIKey':  `${environment.APIKey}`,
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.post<any>(this.url, StrConfirmation, httpOptions);
  }
}
