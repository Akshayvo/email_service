import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/internal/operators';
import { UnitTypes, LstUnitTypes } from '../models/UnitTypes';


const httpOptions = {
  headers: new HttpHeaders({
    'APIKey':  'MTEyOTE6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class FetchDataService {

  // private url = `http://localhost:4200/api/facility/unittypes`;

  private url = `https://simapi.syrasoft.com/1/api/facility/unittypes`; 

  // private url = `https://simapi.syrasoft.com/1/api/facility/contactus`; 



  constructor(private http: HttpClient) { }

  getData(UnitTypes: UnitTypes): Observable<UnitTypes> {
    return this.http.get<UnitTypes>(this.url, httpOptions);
  }
}
