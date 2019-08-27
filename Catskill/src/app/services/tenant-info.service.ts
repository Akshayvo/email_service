import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TenantInfo, Tenant } from '../models/tenant';
import { environment } from '../../environments/environment';


const baseUrl = environment.baseUrl;

var token = localStorage.getItem('strTenantToken');

// const token = environment.authToken;

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
export class TenantInfoService {

  private url = `${baseUrl}/tenant`;

  private signUpAutoPayUrl = `${baseUrl}/tenant/autopaysignup`;


  constructor(private http: HttpClient) { }

  getTenantInfo(tenant: any): Observable<any> {
    console.log(token);

    return this.http.get<any>(this.url,  httpOptions);
  }

  signUpAutoPay(signUp: any): Observable<any> {
    return this.http.post<any>(this.signUpAutoPayUrl, signUp, httpOptions);
  }

}
