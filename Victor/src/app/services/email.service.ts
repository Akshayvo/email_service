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

  public sendEmail(content) {
    const data = {
      service_id: service_id,
      template_id: template_id,
      user_id: user_id,
      template_params: {
        'from_name': content.name,
        'email': content.email,
        'phone': content.phone,
        'location': content.location,
        'message_html': content.message
        // 'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
      }
    };

    return this.http.post(`https://api.emailjs.com/api/v1.0/email/send`, data);

  }
}
