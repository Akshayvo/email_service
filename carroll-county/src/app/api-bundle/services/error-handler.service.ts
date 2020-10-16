import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorReportingService } from './error-reporting.service';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import * as StackTraceParser from 'error-stack-parser';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(
    private errorReport: ErrorReportingService,
    private injector: Injector,
  ) {
    console.log('Error reporting initialized');
  }

  handleError(error: Error | HttpErrorResponse) {
    console.log('Error');
    const router = this.injector.get(Router);

    if (error instanceof HttpErrorResponse) {
      // Server error happened
      if (!navigator.onLine) {
        // No Internet Connection
        console.log('App Error -> Not Online');
      } else {
        console.log('App Error -> Server Error');
      }
    } else {
      // App Error
      console.log('App Error -> Client Error');
    }
    const errorWithContext = this.addContextInfo(error);
    // Generic route /error -> Error Handler Component
    if ( errorWithContext.message.includes('window is not defined') ) {
      console.log('window is not defined');
    } else {
      this.reportError(errorWithContext);
      router.navigate(['/error']);
    }
  }

  addContextInfo(error: any) {
    // You can include context details here (usually coming from other services: UserService...)
    const name = error.name || null;
    const appId = environment.appId;
    const version = environment.VERSION;
    const time = new Date().getTime();
    const id = `${appId}-${time}`;
    const location = LocationStrategy;
    const url = location instanceof PathLocationStrategy ? location.path() : '';
    const status = error.status || null;
    const message = error.message || error.toString();
    const stack = error instanceof HttpErrorResponse ? null : StackTraceParser.parse(error);

    const errorWithContext = {name, appId, version, time, id, url, status, message, stack};
    return errorWithContext;
  }

  reportError(error: any) {
    this.errorReport.reportError(error);
  }
}
