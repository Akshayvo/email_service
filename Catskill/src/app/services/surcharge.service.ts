import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SurchargeService {

  idpaytype = '';
  amt = '';

  constructor(private http: HttpClient) { }

  public getIdPaytype(value: any) {
    this.idpaytype = value;
    // this.dataStringSource.next(this.idpaytype);
  }

  public getAmt(value: any) {
    this.amt = value;
    // this.dataStringSource.next(this.idpaytype);
  }

  getSurCharge(): Observable<any> {
    console.log(this.amt, this.idpaytype);
    const url = `facility/calcsurcharge?idpaytype=${this.idpaytype}&amt=${this.amt}`;
    return this.http.get<any>(url);
  }
}
