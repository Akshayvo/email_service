import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2,
          contactsLocation4, hoursLocation4,
        contactsLocation3, hoursLocation3 } from '../data/contact';
import { WINDOW } from '@ng-toolkit/universal';
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactDetails: any;
  heading: string;
  hoursDetails: any;
  placeName: string;
  name: string;
  email: any;
  phone: any;
  message: string;
  receiveremail: string;
  completeMessage: string;
  locationId: any;
  contactsLocation1:any;
  contactsLocation2:any;
  contactsLocation3:any;
  contactsLocation4:any;
  hoursLocation1:any;
  hoursLocation2:any;
  hoursLocation3:any;
  hoursLocation4:any;

  contactForm: FormGroup;
  submitted = false;
  mailSent = false;
  subject: string;

  constructor(
    @Inject(WINDOW) private window: Window,
    private emailService: EmailService,
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
    private formBuilder: FormBuilder,
    private data: LocationService
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Do you have a question about your account with us or would you like to learn more
      about our services? Use our form or call today!`
    });
    this.titleService.setTitle('Contact Us | AA Secure Storage');

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required,
                Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,5}$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      subject: ['']
  });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  this.receiveMessage();
  this.fetchContactDetails();
    this.fetchHours();
  }

  public fetchContactDetails(){
    this.contactsLocation1 = contactsLocation1;
    this.contactsLocation2 = contactsLocation2;
    this.contactsLocation4 = contactsLocation4;
    this.contactsLocation3 = contactsLocation3;
  }

  public fetchHours(){
    this.hoursLocation1 = hoursLocation1;
    this.hoursLocation2 = hoursLocation2;
    this.hoursLocation4 = hoursLocation4;
    this.hoursLocation3 = hoursLocation3;
  }
  get f() { return this.contactForm.controls; }

  receiveMessage() {
    this.data.currentLocation.subscribe(locationId => {
      this.locationId = locationId;
      this.dataupdate();
    });
  }

  public dataupdate() {
    if ( this.locationId === '1' || this.locationId === 1 ) {
      this.fetchContactDetailsLocation1();
    } else if ( this.locationId === '2' ) {
      this.fetchContactDetailsLocation2();
    } else if ( this.locationId === '4' ) {
      this.fetchContactDetailsLocation4();
    }
  }

  public fetchContactDetailsLocation1() {
    this.heading = `730 Kenton Station Location`;
    this.contactDetails = contactsLocation1;
    this.hoursDetails = hoursLocation1;
  }

  public fetchContactDetailsLocation2() {
    this.heading = `751 Kenton Station Location`;
    this.contactDetails = contactsLocation2;
    this.hoursDetails = hoursLocation2;
  }


  public fetchContactDetailsLocation4() {
    this.heading = `113 McDonald Parkway`;
    this.contactDetails = contactsLocation4;
    this.hoursDetails = hoursLocation4;
  }

onSubmit() {
  this.submitted = true;

 // stop here if form is invalid
 if (this.contactForm.invalid) {
     return;
 } else {
  if ( !this.contactForm.value.subject) {
    this.contactForm.value.subject = 'Website Form Submission';
  }

  this.receiveremail = this.contactDetails[1].data;
  this.completeMessage = `<strong>Phone:</strong> ${this.contactForm.value.phone}, <br/>
                          <strong>Message:</strong> ${this.contactForm.value.message}`;

       const body = {
         name: this.contactForm.value.name,
         email: this.contactForm.value.email,
         receiveremail: this.receiveremail,
         message: this.completeMessage,
         subject: this.contactForm.value.subject
       };
       this.emailService.sendEmail(body)
         .subscribe((response: any) => {
           if (response.result != null) {
            this.mailSent = true;
            this.contactForm.reset();
           } else {
           }
         }, (err) => {
           console.log('Error :', err);
         });
       this.submitted = false;
 }
}


}
