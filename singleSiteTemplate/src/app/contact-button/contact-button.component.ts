import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';
import { contact, officeHours } from '../data/contact';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.scss']
})
export class ContactButtonComponent implements OnInit {
  hours: any;
  name: string;
  email: any;
  phone: any;
  message: any;
  contactInfo: any;

  valid = true;
  submited = true;
  head: any;
  flag: boolean;

  constructor(
    private emailService: EmailService,
  ) {}

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
  }


  public fetchContactDetails() {
    this.contactInfo = contact;
  }

  public fetchHours() {
    this.hours = officeHours;
  }

  public disableBodyScroll() {
    document.body.style.overflowY = 'hidden';
  }

  public enableBodyScroll() {
    document.body.style.overflowY = 'auto';
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
          document.getElementById(helpId).innerHTML = 'Please enter Phone Number in a format (555)555-5555';
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
    if (this.validate('notNull', this.name, 'Name', 'nameHelp') &&
        this.validate('tel', this.phone, 'Phone', 'telHelp') &&
        this.validate('email', this.email, 'Email', 'emailHelp') &&
        this.validate('notNull', this.message, 'Message', 'messageHelp')
         ) {

          this.valid = true;
          const body = {
            name: this.name,
            phone: this.phone,
            email: this.email,
            message: this.message
          };
          console.log(body);
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
    const isValidNumber = /^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/.test(value);
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
