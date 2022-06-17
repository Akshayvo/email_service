import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { StrTempTenantToken} from '../models/tenant';

@Injectable({
  providedIn: 'root'
})
export class AddTenantService {

  private url = `tenant/add`;


  constructor(private http: HttpClient) { }

  addTenant(strTempTenantToken: StrTempTenantToken): Observable<StrTempTenantToken> {
    return this.http.post<StrTempTenantToken>(this.url, strTempTenantToken);
  }

}
