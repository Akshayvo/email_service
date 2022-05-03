import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
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

  constructor(
    public router: Router,
    private emailService: EmailService,
  ) { 
    this.fetchMail()
  }

  fetchMail(){

    this.currentTimeInSeconds= new Date();

    this.completeMessage = `Domain Name: ${environment.websiteUrl}, <br/>
     Timestamp: ${this.currentTimeInSeconds}, <br />
     URL:  ${environment.websiteUrl}${this.router.url}`;

      const body = {
        name: "404 Error Occured",
        email: 'Marketing@syrasoft.com',
        receiveremail: 'darshanhegde5@gmail.com',
        message: this.completeMessage,
        subject: "Error - 404",
      };
      this.emailService.sendEmail(body).subscribe(
        (response: any) => {
          if (response.result != null) {
            this.mailSent = true;
          } else {
            console.log("email not sent")
          }
        },
        (err) => {}
      );
  }

  ngOnInit() {
  }
}
