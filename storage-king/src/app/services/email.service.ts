import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const service_id = 'mailgun';
const template_id = 'template_zUfc6JL6';
const user_id = 'user_3w3aBFetBCiOCRkClF9SN';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public sendEmail(data: any) {

    // const data = {
    //   service_id: service_id,
    //   template_id: template_id,
    //   user_id: user_id,
    //   template_params: {
    //     'from_name': content.name,
    //     'email': content.email,
    //     'subject': content.subject,
    //     'message_html': content.message
    //     // 'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
    //   }
    // };
    const cont = {
      contents: {
        name: data.name,
        senderEmail: data.email,
        receiverEmail: data.receiveremail,
        subject: 'Website Form Submission',
        message: data.message,
        customTemplate: ''
      }
    };

    console.log(cont);

    return this.http.post(`https://emailsvc-ext.syrasoft.com/v1/email`, cont);

  }
}
