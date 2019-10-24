import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SignOutService {

  private signOutUrl = `auth/signout`;

  constructor(private http: HttpClient) { }

  signOut(logOut: any): Observable<any> {
    return this.http.post<any>(this.signOutUrl, logOut);
  }
}
