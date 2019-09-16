import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { StrTempTenantToken} from '../models/tenant';

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
export class AddTenantService {

  private url = `${baseUrl}tenant/add`;


  constructor(private http: HttpClient) { }

  addTenant(StrTempTenantToken: StrTempTenantToken): Observable<StrTempTenantToken> {
    return this.http.post<StrTempTenantToken>(this.url, StrTempTenantToken, httpOptions);
  }

}
