import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import { contactsMall, hoursMall, contactsVillage, hoursVillage  } from '../data/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  breadcrumbActive: any = 'Contact Us';
  currentActive: any = 'Contact Us';
  contactsMall: object;
  contactsVillage: object;
  hoursMall: object;
  hoursVillage: object;

  name: string;
  email: any;
  phone: any;
  location: any;
  message: any;
  places = [ 'Victor Self Storage - Mall', 'Victor Self Storage - Village' ];

  valid = true;
  submited = true;
  head: any;
  flag: boolean;

  constructor(
    private emailService: EmailService,
    private titleService: Title,
    private formBuilder: FormBuilder,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Have a question or concern about self storage units,
                climate controlled storage units or U-Haul rentals?`
    });
    this.titleService.setTitle('Contact Victor Self Storage');
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      Name: null,
      Phone: null,
      Email: null,
      location: null,
      Message: null,
    });

    this.fetchContactDetails();
    this.fetchHours();
  }

  public fetchContactDetails() {
    this.contactsMall = contactsMall;
    this.contactsVillage = contactsVillage;
  }

  public fetchHours() {
    this.hoursMall = hoursMall;
    this.hoursVillage = hoursVillage;
  }

  public validate(check, value, id, helpId) {
    if (check === 'notNull') {
      if (this.validateNull(value)) {
        document.getElementById(id).style.borderColor = 'red';
        document.getElementById(helpId).innerHTML = 'Please fill out this field';
      } else {
        document.getElementById(id).style.border = '1px solid #ced4da';
        document.getElementById(helpId).innerHTML = '';
      }
    }

    if (check === 'tel') {
      if (this.validateNull(value)) {
        document.getElementById(id).style.borderColor = 'red';
        document.getElementById(helpId).innerHTML = 'Please fill out this field';
      } else {
        if (!this.validatePhone(value)) {
          document.getElementById(id).style.borderColor = 'red';
          document.getElementById(helpId).innerHTML = 'Please enter a valid Phone Number';
        } else {
          document.getElementById(id).style.border = '1px solid #ced4da';
          document.getElementById(helpId).innerHTML = '';
        }
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

  public reset() {
    this.valid = true;
    this.form.reset();
    }


  public formSubmit() {
    console.log(this.form);
    if (this.validateEmail(this.email)) {
      if (this.name === '' ||
          this.email === '' ||
          this.message === '' || this.name === undefined || this.message === undefined || this.email === undefined ) {
        this.valid = false;
      } else {
        this.valid = true;
        const body = {
          name: this.name,
          phone: this.phone,
          email: this.email,
          location: this.location,
          message: this.message,
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
      }
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
    console.log('Number is:', isValidNumber);

    if (isValidNumber) {
      alert('true');
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
