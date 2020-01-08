import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth, ForgotPassword, ChangePassword } from '../models/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `auth/signin`;

  private forgotPasswordUrl = `auth/verifyemail`;

  private changePasswordUrl = `auth/changepassword`;


  constructor(private http: HttpClient) {
  }

  auth(auth: Auth): Observable<Auth> {
    return this.http.post<Auth>(this.url, auth);
  }

  forgotPassword(forgotPassword: ForgotPassword) {
    return this.http.post<ForgotPassword>(this.forgotPasswordUrl, forgotPassword);
  }

  changePassword(changePassword: ChangePassword) {
    return this.http.post<ChangePassword>(this.changePasswordUrl, changePassword);
  }

  isUserAuthenticated() {
    return !!localStorage.getItem('strTenantToken');
  }
}
