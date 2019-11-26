import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurchargeService {

  idpaytype = '';
  amt = '';

  constructor(private http: HttpClient) { }

  public getIdPaytype(value: any) {
    this.idpaytype = value;
  }

  public getAmt(value: any) {
    this.amt = value;
  }

  getSurCharge(): Observable<any> {
    const url = `facility/calcsurcharge?idpaytype=${this.idpaytype}&amt=${this.amt}`;
    return this.http.get<any>(url);
  }
}
