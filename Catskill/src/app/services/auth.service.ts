import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/internal/operators';
import { Auth } from '../models/auth';


const httpOptions = {
  headers: new HttpHeaders({
    'APIKey':  'MTEyOTE6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `https://simapi.syrasoft.com/1/api/auth/signin`;


  constructor(private http: HttpClient) {
  }

  auth(Auth: Auth): Observable<Auth> {
    return this.http.post<Auth>(this.url, Auth, httpOptions);
  }
}
