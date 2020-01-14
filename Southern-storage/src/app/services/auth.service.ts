import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth, ForgotPassword, ChangePassword, VerifyCode, ResetPassword } from '../models/auth';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `auth/signin`;

  private forgotPasswordUrl = `auth/verifyemail`;

  private verifyCodeUrl = `auth/verifycode`;

  private resetPasswordUrl = `auth/resetpassword`;

  private changePasswordUrl = `auth/changepassword`;


  constructor(private http: HttpClient) {
  }

  auth(auth: Auth): Observable<Auth> {
    return this.http.post<Auth>(this.url, auth);
  }

  verifyCode(verifyCode: VerifyCode) {
    return this.http.post<VerifyCode>(this.verifyCodeUrl, verifyCode);
  }

  resetPassword(resetPassword: ResetPassword) {
    return this.http.post<ResetPassword>(this.resetPasswordUrl, resetPassword);
  }

  changePassword(changePassword: ChangePassword) {
    return this.http.post<ChangePassword>(this.changePasswordUrl, changePassword);
  }

  forgotPassword(forgotPassword: ForgotPassword) {
    return this.http.post<ForgotPassword>(this.forgotPasswordUrl, forgotPassword);
  }

  isUserAuthenticated() {
    return !!localStorage.getItem('strTenantToken');
  }
}
