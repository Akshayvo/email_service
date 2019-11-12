import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LstUnitTypes } from '../models/unittypes'


@Injectable({
  providedIn: 'root'
})
export class GetMoveinChargesService {

  private url = `movein/charges`;

  constructor(private http: HttpClient) { }
  
  getMoveInCharges(LstUnitTypes: any): Observable<any> {
    return this.http.post<any>(this.url, LstUnitTypes);
  }
}
