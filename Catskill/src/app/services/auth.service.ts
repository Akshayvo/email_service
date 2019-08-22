import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/internal/operators';
import { Auth } from '../models/auth';


const httpOptions = {
  headers: new HttpHeaders({
    'APIKey':  'Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `https://simapi.syrasoft.com/10.1.0.999/api/auth/signin`;


  constructor(private http: HttpClient) {
  }

  auth(auth: Auth): Observable<Auth> {
    return this.http.post<Auth>(this.url, auth, httpOptions);
  }
}
