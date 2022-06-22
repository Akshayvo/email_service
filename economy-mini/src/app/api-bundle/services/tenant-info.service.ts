import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TenantInfoService {

  token: string;


  private url = `tenant`;

  private updateTenantUrl = `tenant/`;

  private signUpAutoPayUrl = `tenant/autopaysignup`;

  private OptionOutOfAutoPayUrl = `tenant/autopayoptout`;


  constructor(private http: HttpClient) { }

  getTenantInfo(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  updateTenant(tenant: any): Observable<any> {
    return this.http.post<any>(this.updateTenantUrl, tenant);
  }

  signUpAutoPay(signUp: any): Observable<any> {
    return this.http.post<any>(this.signUpAutoPayUrl, signUp);
  }

  OptionOutOfAutoPay(signUp: any): Observable<any> {
    return this.http.post<any>(this.OptionOutOfAutoPayUrl, signUp);
  }
}
