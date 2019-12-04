import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LstPayTypes } from '../models/payment';



@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentUrl = `payment`;

  constructor(private http: HttpClient ) { }

  makePayment(lstPayTypes: LstPayTypes[]): Observable<any> {
    return this.http.post<any>(this.paymentUrl, lstPayTypes);
  }
}
