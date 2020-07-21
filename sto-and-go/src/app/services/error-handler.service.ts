import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorReportingService } from './error-reporting.service';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import * as StackTraceParser from 'error-stack-parser';
import { NavigationService } from './navigation.service';

@Injectable({
  providedIn: 'root'
})

export class ErrorHandlerService implements ErrorHandler {

  constructor(
    private errorReport: ErrorReportingService,
    private injector: Injector,
    private navigation: NavigationService,
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
    console.log('errorWithContext', errorWithContext);

    // Generic route /error -> Error Handler Component
    if (errorWithContext.message === 'window is not defined') {
      console.log('window is not defined');
    } else {
      this.reportError(errorWithContext);
      router.navigate(['/error']);

    }
  }

  addContextInfo(error: any) {
    const router = this.injector.get(Router);
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
    const stack = error instanceof HttpErrorResponse ? {
      headers: error.headers,
      status: error.status,
      url: error.url,
      type: error.type,
      referrer: document && document.referrer,
    } : StackTraceParser.parse(error);
    const currenLocation = { url: router.url, navigationLogs: this.navigation.getHistoryLog() };
    // const previousLocation = window.history.back();


    const errorWithContext = {
      name, appId, version, time, id, url, status, message, stack,
      currenLocation,
      // previousLocation
    };
    return errorWithContext;
  }

  reportError(error: any) {
    this.errorReport.reportError(error);
  }
}
