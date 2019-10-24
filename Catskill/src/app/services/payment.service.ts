import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment, LstPayTypes } from '../models/payment';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentUrl = `payment`;

  constructor(private http: HttpClient ) { }

  getPayment(lstPayTypes: LstPayTypes[]): Observable<any> {
    return this.http.post<any>(this.paymentUrl, lstPayTypes);
  }
}
