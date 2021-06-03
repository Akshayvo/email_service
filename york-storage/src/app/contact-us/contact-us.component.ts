import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2, contactsLocation3,
          hoursLocation3, hoursLocation4, contactsLocation4,
          hoursLocation5, contactsLocation5,
          hoursLocation6, contactsLocation6, contactsHomePage  } from '../data/contact';
import { WINDOW } from '@ng-toolkit/universal';
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { LocationService } from '../services/location.service';
import { contactPageLocation1Script, ogContactPage, ogContactPageLocation1, ogContactPageLocation2, ogContactPageLocation3,
  twitterContactPage, twitterContactPageLocation1, twitterContactPageLocation2, twitterContactPageLocation3,  } from '../data/script';
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
  heading1: string;
  heading2: string;
  heading3: string;
  contactDetails1: any;
  contactDetails2: any;
  contactDetails3: any;
  contactHomePage:any;
  
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
    // this.fetchLocationDetails();
    window.scrollTo(0, 0);
    this.fetchScript();
    this.loadScript();
    this.dataupdate();
    this.contactHomePage = contactsHomePage;
}

  get f() { return this.contactForm.controls; }

  public fetchScript() {
    this.script = contactPageLocation1Script;
  }

  public fetchOg() {
    this.og = ogContactPage;
}

public fetchMetaData() {
  this.contactPageTitle = contactPageTitle;
  this.contactPageContent = contactPageContent;
}

public fetchTwitter() {
  this.twitter = twitterContactPage;
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

  public dataupdate() {
      this.fetchContactDetailsLocation1();
      this.fetchContactDetailsLocation2();
      this.fetchContactDetailsLocation3();
      this.fetchContactDetailsLocation4();
  
  }

  // public fetchLocationDetails() {
  //   if (this.router.url.includes('platte-ave')) {
  //     this.fetchContactDetailsLocation1();
  //   } else if (this.router.url.includes('marquis-ave')) {
  //     this.fetchContactDetailsLocation2();
  //   } else if (this.router.url.includes('lincoln-ave')) {
  //     this.fetchContactDetailsLocation3();
  //   } else if (this.router.url.includes('belforest')) {
  //     this.fetchContactDetailsLocation4();
  //   } else if (this.router.url.includes('fairhope')) {
  //     this.fetchContactDetailsLocation5();
  //   } else if (this.router.url.includes('robertsdale')) {
  //     this.fetchContactDetailsLocation6();
  //   }
  // }

  public fetchContactDetailsLocation1() {
    this.heading1 = `Platte Ave`;
    this.locationId = '1'
    this.contactDetails1 = contactsLocation1;
    this.hoursDetails = hoursLocation1;
    console.log(this.heading1 ,this.contactDetails1 )
    
  }
  
  public fetchContactDetailsLocation2() {
    this.locationId = '2'
    this.heading2 = `Marquis Ave`;
    this.contactDetails2 = contactsLocation2;
    this.hoursDetails = hoursLocation2;
    console.log(this.heading2 ,this.contactDetails2 )
  }

  public fetchContactDetailsLocation3() {
    this.heading3 = `Lincoln Ave`;
    this.locationId = '3'
    this.contactDetails3 = contactsLocation3;
    this.hoursDetails = hoursLocation3;
    console.log(this.heading3 ,this.contactDetails3 )
  }

  public fetchContactDetailsLocation4() {
    this.heading = `Self Storage of York - Belforest`;
    this.locationId = '4'
    this.contactDetails = contactsLocation4;
    this.hoursDetails = hoursLocation4;
  } 

  public fetchContactDetailsLocation5() {
    this.heading = `Self Storage of York - Fairhope`;
    this.locationId = '5'
    this.contactDetails = contactsLocation5;
    this.hoursDetails = hoursLocation5;
  } 

  public fetchContactDetailsLocation6() {
    this.heading = `Self Storage of York - Robertsdale`;
    this.locationId = '6'
    this.contactDetails = contactsLocation6;
    this.hoursDetails = hoursLocation6;
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

  this.receiveremail = this.contactDetails[1].data;
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
