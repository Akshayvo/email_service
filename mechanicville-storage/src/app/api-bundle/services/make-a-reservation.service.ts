import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { StrConfirmation } from '../models/movein';


@Injectable({
  providedIn: 'root'
})
export class MakeAReservationService {

  private url = `movein/reserve`;

  constructor(private http: HttpClient) { }

  makeAReservation(strConfirmation: StrConfirmation): Observable<any> {
    return this.http.post<any>(this.url, strConfirmation);
  }
}
