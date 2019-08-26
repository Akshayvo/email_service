import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment, LstPayTypes } from '../models/payment';


const token = localStorage.getItem('strTenantToken');
const httpOptions = {
  headers: new HttpHeaders({
    'APIKey':  'Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  })
};


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentUrl = `https://simapi.syrasoft.com/10.1.0.999/api/payment`;

  constructor(private http: HttpClient) { }

  getPayment(lstPayTypes: LstPayTypes[]): Observable<any> {
    return this.http.post<any>(this.paymentUrl, lstPayTypes, httpOptions);
  }
}
