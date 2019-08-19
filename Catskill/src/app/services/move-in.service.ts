import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoveIn } from '../models/moveIn';


const getTokenValue = localStorage.getItem('strTenantToken');

const httpOptions = {
  headers: new HttpHeaders({
    'APIKey':  'MTEyOTE6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + getTokenValue
  })
};

@Injectable({
  providedIn: 'root'
})
export class MoveInService {

  private moveInURl = `https://simapi.syrasoft.com/1/api/movein`;

  constructor(private http: HttpClient) { }

  moveIn(moveIn: MoveIn): Observable<MoveIn> {
    return this.http.post<MoveIn>(this.moveInURl, MoveIn, httpOptions);
  }
}
