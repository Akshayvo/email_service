import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';



const httpOptions = {
  headers: new HttpHeaders({
    'APIKey':  `${environment.APIKey}`,
    'Content-Type': 'application/json'
  })
};

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class SurchargeService {

  idpaytype = "";
  amt = "";

  constructor(private http: HttpClient) { }
  
  public getIdPaytype(value){
    this.idpaytype = value;
    console.log("getIdPaytype data function called " + value + ' ,'+ this.idpaytype);
    // this.dataStringSource.next(this.idpaytype);
  }

  public getAmt(value){
    this.amt = value;
    console.log("getAmt data function called " + value +','+ this.amt);
    // this.dataStringSource.next(this.idpaytype);
  }  
  
  getSurCharge(): Observable<any> {
    console.log(this.amt, this.idpaytype);
    let url = `${baseUrl}/facility/calcsurcharge?idpaytype=${this.idpaytype}&amt=${this.amt}`;
    return this.http.get<any>(url, httpOptions);
  }
}
