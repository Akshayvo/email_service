import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoveInService {

  private getMoveinCharges = `movein/charges`;
  private movein = `movein`;

  constructor(private http: HttpClient) { }

  getMoveInCharges(request: any): Observable<any> {
    return this.http.post<any>(this.getMoveinCharges, request);
  }
  moveIn(request: any): Observable<any> {
    return this.http.post<any>(this.movein, request);
  }
}
