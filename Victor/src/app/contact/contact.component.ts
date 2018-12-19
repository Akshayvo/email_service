import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import { contactsMall, hoursMall, contactsVillage, hoursVillage  } from '../data/contact';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactsMall: object;
  contactsVillage: object;
  hoursMall: object;
  hoursVillage: object;

  name: string;
  placeName: string;
  email: any;
  phone: any;
  location: any;
  message: any;
  places = [ 'Victor Self Storage - Mall', 'Victor Self Storage - Village' ];
  receiveremail: string;
  completeMessage: string;

  valid = true;
  submited = true;
  head: any;
  flag: boolean;
  private sub: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private emailService: EmailService,
    private route: ActivatedRoute,
    private titleService: Title,
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
    this.sub = this.route.queryParams.subscribe(params => {
      this.placeName = params['name'];
    });
    if ( this.placeName === 'mall' ) {
      this.location = 'Victor Self Storage - Mall';
    }  else if ( this.placeName === 'village' ) {
      this.location = 'Victor Self Storage - Village';
    } else if (this.placeName === undefined ) {
      this.location = ' ';
    }
    this.fetchContactDetails();
    this.fetchHours();
    this.window.scrollTo(0, 0);
  }

  public fetchContactDetails() {
    this.contactsMall = contactsMall;
    this.contactsVillage = contactsVillage;
  }

  public fetchHours() {
    this.hoursMall = hoursMall;
    this.hoursVillage = hoursVillage;
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
  this.location = '';
}


  public formSubmit() {
    if (this.validate('notNull', this.name, 'Name', 'nameHelp') &&
        this.validate('tel', this.phone, 'Phone', 'telHelp') &&
        this.validate('email', this.email, 'Email', 'emailHelp') &&
        this.validate('notNull', this.location, 'Location', 'locationHelp') &&
        this.validate('notNull', this.message, 'Message', 'messageHelp')
         ) {

          if (this.location === 'Victor Self Storage - Mall') {
              this.receiveremail = this.contactsMall[2].data;
            } else if (this.location === 'Victor Self Storage - Village') {
              this.receiveremail = this.contactsVillage[2].data;
            }

          this.completeMessage = `<strong>Phone:</strong> ${this.phone}, <br/>
                                 <strong>Message:</strong> ${this.message}`;

          this.valid = true;
          const body = {
            name: this.name,
            email: this.email,
            receiveremail: this.receiveremail,
            message: this.completeMessage,
          };

          this.emailService.sendEmail(body)
            .subscribe((response: any) => {
              // console.log('Authentication response:', response);
              // if (response.result != null) {
              //   alert(response.message);
              // } else {
              //   // console.log(`response`, response.result);
              //   alert(response.message);
              // }
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
    // console.log(value);
    return (false);
  }

}
