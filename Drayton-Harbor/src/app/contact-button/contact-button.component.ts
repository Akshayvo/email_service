import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';
import { contact, hours, socialLinks } from '../data/contact';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.scss']
})
export class ContactButtonComponent implements OnInit {

  // form: FormGroup;
  hours: any;
  name: string;
  email: any;
  phone: any;
  message: any;
  contactInfo: any;
  receiveremail: string;
  completeMessage: string;
  socialLinks: any;

  valid = true;
  submited = true;
  head: any;
  flag: boolean;

  constructor(
    private emailService: EmailService,
  ) {
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    this.fetchsocialLinks();
  }

  public fetchContactDetails() {
    this.contactInfo = contact;
  }

  public fetchHours() {
    this.hours = hours;
  }

  public fetchsocialLinks() {
    this.socialLinks = socialLinks;
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
  this.phone = '';
}


  public formSubmit() {
    if (this.validate('notNull', this.name, 'Name1', 'nameHelp1') &&
        this.validate('tel', this.phone, 'Phone1', 'telHelp1') &&
        this.validate('email', this.email, 'Email1', 'emailHelp1') &&
        this.validate('notNull', this.message, 'Message1', 'messageHelp1')
         ) {

          this.receiveremail = this.contactInfo[1].data;

          this.completeMessage = `phone: ${this.phone}, <br/>
                                 message: ${this.message}`;

          this.valid = true;
          const body = {
            name: this.name,
            email: this.email,
            receiveremail: this.receiveremail,
            message: this.completeMessage,
          };
          // console.log(body);
          this.emailService.sendEmail(body)
            .subscribe((response: any) => {
              // console.log('Authentication response:', response);
              if (response.result != null) {
                alert(response.message);
              } else {
                // console.log(`response`, response.result);
                alert(response.message);
              }
            }, (err) => {
              console.log('Error :', err);
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
