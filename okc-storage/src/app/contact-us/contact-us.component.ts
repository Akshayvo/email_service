import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import { contactsLocation1, hoursLocation1,
          
           } from '../data/contact';
import { WINDOW } from '@ng-toolkit/universal';
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { LocationService } from '../services/location.service';
import { contactPageLocation1Script, ogContactPageLocation1,
   twitterContactPageLocation1 } from '../data/script';
import { CanonicalService } from '../services/canonical.service';
import { contactPageTitle, contactPageContent } from '../data/title';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

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
  subject: any;
  eventName: string;
  script: any;
  contactForm: FormGroup;
  submitted = false;
  mailSent = false;
  og: any;
  twitter: any;
  contactPageContent: string;
  contactPageTitle: string;
  
  constructor(
    @Inject(WINDOW) private window: Window,
    private emailService: EmailService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private formBuilder: FormBuilder,
    private data: LocationService,
    private canonical: CanonicalService
  ) {
    this.fetchMetaData();
    this.fetchOg();
    this.fetchTwitter();
    this.og.forEach(element => {
      this.meta.addTag({
        property: element.property,
        content: element.content
      })
    });

    this.twitter.forEach(element => {
      this.meta.addTag({
        name: element.name,
        content: element.content
      })
    });
    this.canonical.create();
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
      subject: [''],
  });
  }

  ngOnInit() {
    this.fetchLocationDetails();
    window.scrollTo(0, 0);
    this.fetchScript();
    this.loadScript();
}

  get f() { return this.contactForm.controls; }

  public fetchScript() {
    this.script = contactPageLocation1Script;
  }

  public fetchOg() {
    if (this.router.url.includes('okc-storage')) {
      this.og = ogContactPageLocation1;
    } 
}

public fetchMetaData() {
  this.contactPageTitle = contactPageTitle;
  this.contactPageContent = contactPageContent;
}

public fetchTwitter() {
  if (this.router.url.includes('okc-storage')) {
    this.twitter = twitterContactPageLocation1;
  } 
}

  public loadScript() {
    const node = document.createElement('script'); // creates the script tag
    node.type = 'application/ld+json'; // set the script type
    node.async = false; // makes script run asynchronously
    // node.charset = 'utf-8';
    node.innerHTML = JSON.stringify(this.script);
    // append to head of document
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  // receiveMessage() {
  //   this.data.currentLocation.subscribe(locationId => {
  //     this.locationId = locationId;
  //     this.dataupdate();
  //   });
  // }

  // public dataupdate() {
  //   if ( this.locationId === '1' || this.locationId === 1 ) {
  //     this.fetchContactDetailsLocation1();
  //     this.mailSent = false;
  //   } else if ( this.locationId === '2' ) {
  //     this.fetchContactDetailsLocation2();
  //     this.mailSent = false;
  //   } else if ( this.locationId === '3' ) {
  //     this.fetchContactDetailsLocation3();
  //   }
  // }

  public fetchLocationDetails() {
    if (this.router.url.includes('okc-storage')) {
      this.fetchContactDetailsLocation1();
    } 
  }

  public fetchContactDetailsLocation1() {
    this.heading = `Self Storage Facility - OKC Storage`;
    this.locationId = '1'
    this.contactDetails = contactsLocation1;
    this.hoursDetails = hoursLocation1;
  }
  
 

onSubmit() {
  this.submitted = true;
  const today = new Date();
  this.eventName = 'ContactFormsubmission';
  window['dataLayer'] = window['dataLayer'] || {};
  window['dataLayer'] = window['dataLayer'] || [];
  window['dataLayer'].push({
    'event': this.eventName,
    'location' : this.heading,
    'date': today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
    'time': today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(),
  });

 // stop here if form is invalid
 if (this.contactForm.invalid) {
     return;
 } else {

  if ( !this.contactForm.value.subject) {
    this.contactForm.value.subject = 'Website Form Submission';
  }

  this.receiveremail = this.contactDetails[1].email;
  console.log(this.contactDetails[1].email);
  this.completeMessage = `<strong>Phone:</strong> ${this.contactForm.value.phone}, <br/>
                          <strong>Message:</strong> ${this.contactForm.value.message}`;

       const body = {
         name: this.contactForm.value.name,
         email: this.contactForm.value.email,
         receiveremail: this.receiveremail,
         message: this.completeMessage,
         subject: this.contactForm.value.subject,
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
