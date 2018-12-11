import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';

import { contact, hours } from '../data/contact';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  breadcrumbActive: any = 'Contact Us';
  currentActive: any = 'CONTACT';
  contactDetails: any;
  hours: any;
  name: string;
  email: any;
  phone: any;
  subject: string;
  message: string;
  valid = true;
  receiveremail: string;
  completeMessage: string;
  submited = true;

  constructor(
    @Inject(WINDOW) private window: Window,
    private emailService: EmailService,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Have a question about our self storage units or RV parking spaces?
                Use our convenient contact form or the contact information here to
                speak with one of our friendly and knowledgeable managers!`
    });
    this.titleService.setTitle('Contact Us | Fortress Mini Storage');
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    this.window.scrollTo(0, 0);
  }

  public fetchContactDetails() {
    this.contactDetails = contact;
  }

  public fetchHours() {
    this.hours = hours;
  }

  public validate(check: string, value: any, id: string, helpId: string) {
    if (check === 'notNull') {
      if (this.validateNull(value)) {
        document.getElementById(id).style.borderColor = 'red';
        document.getElementById(helpId).innerHTML = 'Please fill out this field';
        return false;
      } else {
        document.getElementById(id).style.border = '1px solid #ced4da';
        document.getElementById(helpId).innerHTML = '';
        return true;
      }
    }

    if (check === 'tel') {
      if (this.validateNull(value)) {
        document.getElementById(id).style.borderColor = 'red';
        document.getElementById(helpId).innerHTML = 'Please fill out this field';
        return false;
      } else {
        if (!this.validatePhone(value)) {
          document.getElementById(id).style.borderColor = 'red';
          document.getElementById(helpId).innerHTML = 'Please enter a valid phone number.';
          return false;
        } else {
          document.getElementById(id).style.border = '1px solid #ced4da';
          document.getElementById(helpId).innerHTML = '';
          return true;
        }
      }
    }

    if (check === 'email') {
      if (this.validateNull(value)) {
        document.getElementById(id).style.borderColor = 'red';
        document.getElementById(helpId).innerHTML = 'Please fill out this field';
        return false;
        } else {
        if (!this.validateEmail(value)) {
          document.getElementById(id).style.borderColor = 'red';
          document.getElementById(helpId).innerHTML = 'Please enter a valid email id';
          return false;
        } else {
          document.getElementById(id).style.border = '1px solid #ced4da';
          document.getElementById(helpId).innerHTML = '';
          return true;
        }
      }
  }
}

public formClear() {
  this.name = '',
  this.email = '',
  this.message = '',
  this.phone = '',
  this.subject = '';
}


  public formSubmit() {
    if (this.validate('notNull', this.name, 'Name', 'nameHelp') &&
        this.validate('tel', this.phone, 'Phone', 'telHelp') &&
        this.validate('email', this.email, 'Email', 'emailHelp') &&
        this.validate('notNull', this.message, 'Message', 'messageHelp')
         ) {

          if ( this.subject === undefined ) {
            this.subject = 'Enquiry Message';
          }


          this.receiveremail = this.contactDetails[1].data;

          this.completeMessage = `phone: ${this.phone}, <br/>
                                 message: ${this.message}`;

          this.valid = true;
          const body = {
            name: this.name,
            email: this.email,
            subject: this.subject,
            receiveremail: this.receiveremail,
            message: this.completeMessage,
          };
          console.log(body);
          this.emailService.sendEmail(body)
            .subscribe((response: any) => {
              // console.log('Authentication response:', response);
              if (response.result != null) {
                // alert(response.message);
              } else {
                // console.log(`response`, response.result);
                // alert(response.message);
              }
            }, (err) => {
              // console.log('Error :', err);
            });
          this.submited = false;
          // MailService(body);
    } else {

      this.valid = false;
      }
    }

  private validateEmail(value: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      return (true);
    }
    return (false);
  }

  private validatePhone(value: string) {
    const isValidNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,5}$/.test(value);
    if (isValidNumber) {
      return (true);
    } else {
      // alert('false');
      return (false);
    }
  }

  private validateNull(value: string) {
    if (value === undefined || value === '') {
      return (true);
    }
    console.log(value);
    return (false);
  }

}

