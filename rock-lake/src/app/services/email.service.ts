import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  contact: any;


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

    return this.http.post(`email`, cont);

  }

}
