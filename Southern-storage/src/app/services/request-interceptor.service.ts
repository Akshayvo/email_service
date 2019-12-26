import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>, next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Values
    console.log('request interceptor is working');

    const tenantToken = localStorage.getItem('strTenantToken');
    const token = tenantToken || localStorage.getItem('strTempTenantToken');
    const baseUrl = environment.baseUrl;
    const emailUrl = environment.emailBaseUrl;
    // Modify Request, by keeping reference to previous
    const modifiedAPIKey = request.clone({
      headers: request.headers.set('APIKey', `${environment.APIKey}`),
    });
    let authAPIKey = modifiedAPIKey;
    if (token) {
      authAPIKey = modifiedAPIKey.clone({
        headers: token && request.url.startsWith('tenant') ?
          modifiedAPIKey.headers.set('Authorization', `Bearer ${tenantToken}`)
          : modifiedAPIKey.headers.set('Authorization', `Bearer ${token}`)
      });
    }

    const contentAPIKey = authAPIKey.clone({
      headers: authAPIKey.headers.set('Content-Type', 'application/json'),
      url:  request.url.startsWith('email') ? `${emailUrl}` : `${baseUrl}${request.url}`
    });
    return next.handle(contentAPIKey);
  }
}
