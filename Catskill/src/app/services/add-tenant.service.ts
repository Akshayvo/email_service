import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { ObjTenant, ObjTenantDetail } from '../models/tenant';

import { environment } from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'APIKey':  'Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
    'Content-Type': 'application/json'
  })
};

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class AddTenantService {



  // private url = `https://simapi.syrasoft.com/1/api/tenant/add`;

  private url = `${baseUrl}/api/tenant/add`;


  constructor(private http: HttpClient) { }

  addTenant(objTenantDetail: ObjTenantDetail): Observable<ObjTenantDetail> {
    return this.http.post<ObjTenantDetail>(this.url, objTenantDetail, httpOptions);
  }

}
