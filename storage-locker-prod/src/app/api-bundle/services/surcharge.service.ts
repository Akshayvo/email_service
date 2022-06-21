import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurchargeService {

  idpaytype = 0;
  amt = 0;

  constructor(private http: HttpClient) { }

  public getIdPaytype(value: any) {
    this.idpaytype = value;
  }

  public setAmt(value: any) {
    this.amt = value;
  }

  getAmt() {
    return this.amt;
  }

  getSurCharge(): Observable<any> {
    const url = `facility/calcsurcharge?idpaytype=${this.idpaytype}&amt=${this.amt}`;
    return this.http.get<any>(url);
  }
}
