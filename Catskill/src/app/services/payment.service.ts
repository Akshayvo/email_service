import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment, LstPayTypes } from '../models/payment';

import { environment } from '../../environments/environment';

const baseUrl = environment.baseUrl;


const token = localStorage.getItem('strTenantToken');
const httpOptions = {
  headers: new HttpHeaders({
    'APIKey':  `${environment.APIKey}`,
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  })
};


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentUrl = `${baseUrl}payment`;

  constructor(private http: HttpClient) { }

  getPayment(lstPayTypes: LstPayTypes[]): Observable<any> {
    return this.http.post<any>(this.paymentUrl, lstPayTypes, httpOptions);
  }
}
