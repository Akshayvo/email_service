import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public sendEmail(data: any) {
    const cont = {
      contents: {
        name: data.name,
        senderEmail: data.email,
        receiverEmail: data.receiveremail,
        subject: data.subject,
        message: data.message,
        customTemplate: ''
      }
    };

    return this.http.post(`https://emailsvc-ext.syrasoft.com/v1/email`, cont);

  }
}
