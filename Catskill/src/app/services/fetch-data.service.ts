import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/internal/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'APIKey':  'Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
    // 'Origin': 'https://www.catskillselfstorage.com',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})



export class FetchDataService {

  private url = `https://localhost:60444/api/facility/unittypes`;

  // private url = `https://simapi.syrasoft.com/1/api/facility/unittypes`;

  constructor(private http: HttpClient) { }


  getData(): Observable<any> {
    return this.http.get<any>(this.url, httpOptions);
  }
}
