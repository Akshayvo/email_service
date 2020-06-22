import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import {
  contact,
  contactsLocation1,
  contactsLocation2,
  hours,
  hoursLocation1,
  hoursLocation2,
} from '../data/contact';
import { WINDOW } from '@ng-toolkit/universal';
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { contactPageContent, contactPageTitle } from '../data/title';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  places = [
    {
      id: 0,
      name: 'Bluegrass Storage - Filiatreau Lane',
    },
    {
      id: 1,
      name: 'Bluegrass Storage - Springfield Road',
    },
 ];

  contactsLocation2: any;
  contactsLocation1: any;
  contacts500EastGardenStreet: any;
  contacts817SGetty: any;
  contacts246WSouthLane: any;
  contacts430SHwy83: any;
  hoursLocation1: any;
  hoursLocation2: any;
  hours246WSouthLane: any;
  hours430SHwy83: any;
  hours2633EastMainStreet: any;
  contacts2633EastMainStreet: any;
  hours500EastGardenStreet: any;
  hours817SGetty: any;
  placeName: string;
  name: string;
  email: any;
  phone: any;
  subject: string;
  location: any;
  message: string;
  receiveremail: string;
  contact: any;
  hours: any;
  completeMessage: string;


  contactForm: FormGroup;
  submitted = false;
  mailSent = false;
  contactPageContent: any;
  contactPageTitle: any;
  private sub: any;


  constructor(
    @Inject(WINDOW) private window: Window,
    private emailService: EmailService,
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
    private formBuilder: FormBuilder
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.contactPageContent}`
    });
    this.titleService.setTitle(`${this.contactPageTitle}`);

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required,
                Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,5}$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      location: ['', Validators.required],
      subject: ['']
  });
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.placeName = params['name'];
    });

    this.fetchContactDetails();
    this.fetchHours();
    window.scrollTo(0, 0);
  }

  public fetchMetaData() {
    this.contactPageContent = contactPageContent;
    this.contactPageTitle = contactPageTitle;
  }

  get f() { return this.contactForm.controls; }

  public fetchContactDetails() {
    this.contact = contact;
    this.contactsLocation1 = contactsLocation1;
    this.contactsLocation2 = contactsLocation2;
  }

  public fetchHours() {
    this.hours = hours;
    this.hoursLocation2 = hoursLocation2;
    this.hoursLocation1 = hoursLocation1;
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

   if (this.contactForm.value.location === 'Bluegrass Storage - Filiatreau Lane') {
    this.receiveremail = this.contactsLocation1[2].data;
  } else if (this.contactForm.value.location === 'Bluegrass Storage - Springfield Road') {
    this.receiveremail = this.contactsLocation2[2].data;
  }

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
           } else {
           }
         }, (err) => {
           console.log('Error :', err);
         });
       this.submitted = false;
       this.mailSent = false;
       this.contactForm.reset();
    }
  }
}
