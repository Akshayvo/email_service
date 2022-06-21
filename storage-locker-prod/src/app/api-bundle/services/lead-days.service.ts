import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadDaysService {

  private url = `setting/leaddays`;

  constructor(private http: HttpClient) { }

  getLeadDays(data: any): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
