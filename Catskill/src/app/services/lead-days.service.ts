import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import { environment } from '../../environments/environment';

const baseUrl = environment.baseUrl;

const httpOptions = {
  headers: new HttpHeaders({
    'APIKey':  `${environment.APIKey}`,
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class LeadDaysService {

  private url = `${baseUrl}setting/leaddays`;

  constructor(private http: HttpClient) { }

  getLeadDays(data:any): Observable<any> {
    return this.http.get<any>(this.url, httpOptions);
  }
}
