import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';


const baseUrl = environment.baseUrl;


const token = localStorage.getItem('strTenantToken');
const httpOptions = {
  headers: new HttpHeaders({
    'APIKey': 'Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class SignOutService {

  private signOutUrl = `${baseUrl}auth/signout`;

  constructor(private http: HttpClient) { }

  signOut(signOut: any): Observable<any> {
    return this.http.post<any>(this.signOutUrl, httpOptions);
  }
}
