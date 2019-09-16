import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TenantInfo, Tenant } from '../models/tenant';
import { environment } from '../../environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class TenantInfoService {

  private url = `${baseUrl}tenant`;

  private updateTenantUrl = `${baseUrl}tenant/`;

  private signUpAutoPayUrl = `${baseUrl}tenant/autopaysignup`;

  private OptionOutOfAutoPayUrl = `${baseUrl}tenant/autopayoptout`;


  constructor(private http: HttpClient) { }

  getTenantInfo(tenant: any): Observable<any> {
    const token = localStorage.getItem('strTenantToken');

    const httpOptions = {
      headers: new HttpHeaders({
        'APIKey':  `${environment.APIKey}`,
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<any>(this.url,  httpOptions);
  }

  updateTenant(tenant: any): Observable<any> {
    const token = localStorage.getItem('strTenantToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'APIKey':  `${environment.APIKey}`,
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.post<any>(this.updateTenantUrl, tenant, httpOptions);
  }

  signUpAutoPay(signUp: any): Observable<any> {
    const token = localStorage.getItem('strTenantToken');

    const httpOptions = {
      headers: new HttpHeaders({
        'APIKey':  `${environment.APIKey}`,
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.post<any>(this.signUpAutoPayUrl, signUp, httpOptions);
  }

  OptionOutOfAutoPay(signUp: any): Observable<any> {
    const token = localStorage.getItem('strTenantToken');

    const httpOptions = {
      headers: new HttpHeaders({
        'APIKey':  `${environment.APIKey}`,
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.post<any>(this.OptionOutOfAutoPayUrl, signUp, httpOptions);
  }
}
