import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailService } from './email.service';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ErrorReportingService {

  constructor(
    public email: EmailService,
  ) {}

  reportError(error: Error | HttpErrorResponse | any) {
    console.log('Sending Email For Error:', error);
    // Sending the error
    this.email.sendEmail({
      name: environment.appId,
      email: environment.senderEmail,
      receiveremail: environment.errorsMails,
      message: `Error Details: ${JSON.stringify(error)}`,
      subject: ` ${environment.appId} Website Error Details`
    }).subscribe((result) => {
      console.log('Send Email Result:', result);
    });
  }
}
