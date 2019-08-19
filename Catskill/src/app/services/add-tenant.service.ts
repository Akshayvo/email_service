import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ObjTenant } from '../models/tenant';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'APIKey':  'MTEyOTE6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AddTenantService {

  private url = `https://simapi.syrasoft.com/1/api/tenant/add`;

  constructor(private http: HttpClient) { }

  getReserveUnit(objTenant: ObjTenant): Observable<ObjTenant> {
    return this.http.post<ObjTenant>(this.url, httpOptions);
  }
}
