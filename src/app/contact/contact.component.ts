import { Component, OnInit, Input } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { contact, hours } from '../data/contact';
import { EmailService } from '../services/email.service';
// import * as MailService from '../services/email';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  breadcrumbActive: any = 'Contact Us';
  currentActive: any = 'CONTACT US';
  contactDetails: any;
  hours: any;
  name: any;
  email: any;
  subject: any;
  message: any;
  valid: any = true;
  submited: any = true;
  head: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private emailService: EmailService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    this.setTitle();
  }

  public setTitle() {
    this.titleService.setTitle('Contact Catskill Self Storage ');
  }

  public navigate(location) {
    this.router.navigate([location]);
  }

  public fetchContactDetails() {
    this.contactDetails = contact;
  }

  public fetchHours() {
    this.hours = hours;
  }

  public validate(check, value, id, helpId) {
    // console.log(check + ' ' + value);
    if (check === 'notNull') {
      if (this.validateNull(value)) {
        document.getElementById(id).style.borderColor = 'red';
        document.getElementById(helpId).innerHTML = 'Please fill out this field';
      } else {
        document.getElementById(id).style.border = '1px solid #ced4da';
        document.getElementById(helpId).innerHTML = '';
      }
    }
    if (check === 'email') {
      if (this.validateNull(value)) {
        document.getElementById(id).style.borderColor = 'red';
        document.getElementById(helpId).innerHTML = 'Please fill out this field';
      } else {
        if (!this.validateEmail(value)) {
          document.getElementById(id).style.borderColor = 'red';
          document.getElementById(helpId).innerHTML = 'Please enter a valid email id';
        } else {
          document.getElementById(id).style.border = '1px solid #ced4da';
          document.getElementById(helpId).innerHTML = '';
        }
      }
    }
  }

  private validateEmail(value) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      return (true);
    }
    return (false);
  }

  private validateNull(value) {
    if (value === undefined || value === '') {
      return (true);
    }
    return (false);
  }

  public formSubmit() {
    this.valid = false;
    if (this.validateEmail(this.email)) {
      if (this.name === '' || this.message === '' || this.name === undefined || this.message === undefined) {
        this.valid = false;
      } else {
        this.valid = true;
        const body = {
          name: this.name,
          email: this.email,
          message: this.message,
          subject: this.subject,
        };
        this.emailService.sendEmail(body)
          .subscribe((response: any) => {
            console.log('Authentication response:', response);
            if (response.result != null) {
              alert(response.message);
            } else {
              console.log(`response`, response.result);
              alert(response.message);
            }
          }, (err) => {
            console.log('Error :', err);
          });
        this.submited = false;
        // MailService(body);
      }
    }
  }

}
