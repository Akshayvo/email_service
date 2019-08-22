import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TenantInfo, Tenant } from '../models/tenant';

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
export class TenantInfoService {

  private url = `https://simapi.syrasoft.com/10.1.0.999/api/tenant`;


  constructor(private http: HttpClient) { }

  getTenantInfo(tenant: Tenant): Observable<Tenant> {
    return this.http.get<Tenant>(this.url,  httpOptions);
  }

  // getToken() {
  //   return localStorage.getItem('strTenantToken');
  // }

}
