import { Component, OnInit, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  mailSent: boolean;
  completeMessage: any;
  currentTimeInSeconds: any;
  refferURL: any;

  constructor(
    public router: Router,
    private emailService: EmailService,
  ) {
    this.refferURL = sessionStorage.getItem('refferURL');
    if (!isDevMode) {
      this.fetchMail()
    }
  }

  fetchMail() {
    this.currentTimeInSeconds = new Date();
    const userAgent = window.navigator.userAgent;
    this.completeMessage = `Domain Name: ${environment.websiteUrl}, <br/>
    Effected URL:  ${environment.websiteUrl}${this.router.url} <br />
    Timestamp: ${this.currentTimeInSeconds} <br />
    Refferring URL: ${environment.websiteUrl}${this.refferURL} <br />
    User Agent: ${userAgent}`;

    const body = {
      name: "404 Error Occured",
      email: 'Marketing@syrasoft.com',
      receiveremail: 'bizapps@codeparva.in',
      message: this.completeMessage,
      subject: "Error - 404",
    };
    this.emailService.sendEmail(body).subscribe(
      (response: any) => {
        if (response.result != null) {
          this.mailSent = true;
          sessionStorage.clear();
        } else {
          console.log("email not sent")
        }
      },
      (err) => { }
    );
  }

  ngOnInit() {
  }
}