import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/internal/operators';
import { Auth, ForgotPassword } from '../models/auth';

import { environment } from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'APIKey':  `${environment.APIKey}`,
    'Content-Type': 'application/json'
  })
};


const baseUrl = environment.baseUrl;
// const baseUrl = `https://simapi.syrasoft.com/10.1.0.999/api/`

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `${baseUrl}auth/signin`;

  private forgotPasswordUrl = `${baseUrl}auth/verifyemail`;


  constructor(private http: HttpClient) {
  }

  auth(auth: Auth): Observable<Auth> {
    return this.http.post<Auth>(this.url, auth, httpOptions);
  }

  forgotPassword(forgotPassword: ForgotPassword) {
    return this.http.post<ForgotPassword>(this.forgotPasswordUrl, forgotPassword, httpOptions);
  }
}
