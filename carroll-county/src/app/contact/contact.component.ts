import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2, contactsLocation3,
          hoursLocation3,  } from '../data/contact';
import { WINDOW } from '@ng-toolkit/universal';
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { LocationService } from '../services/location.service';
import { ogContactPage, twitterContactPage } from '../data/script';
import { contactPageTitle, contactPageContent } from '../data/title';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  heading: string;
  placeName: string;
  name: string;
  email: any;
  phone: any;
  message: string;
  receiveremail: string;
  completeMessage: string;
  locationId: any;
  subject: any;
  contactsLocation1: any;
  contactsLocation2: any;
  contactsLocation3: any;
  hoursLocation1: any;
  hoursLocation2: any;
  hoursLocation3: any;
  og: any;
  script: any;
  twitter: any;
  contactForm: FormGroup;
  submitted = false;
  mailSent = false;
  eventName: string;
  contactPageTitle: string;
  contactPageContent: string;
  places = [
    {
      id: 1,
      name: 'Carroll County Storage - McKenzie',
    },
    {
      id: 2,
      name: 'Carroll County Storage - Huntingdon',
    },
    {
      id: 3,
      name: 'Carroll County Storage at the Airport',
    },
  ];
  private sub: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private emailService: EmailService,
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
    private formBuilder: FormBuilder,
    private data: LocationService,
    private canonical: CanonicalService

  ) {
    this.fetchMetaData();
    this.fetchOg();
    this.loadScript();
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
      content: `If you have questions about your account or the services we offer, take a moment to fill our out form, or use the contact information to speak with us!`
    });
    this.titleService.setTitle('Contact Us | Carroll County Storage');

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required,
                Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,5}$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      location: ['', Validators.required],
      subject: [''],
  });
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.placeName = params['name'];
    });
    const today = new Date();
    this.eventName = 'ContactFormsubmission';
    window['dataLayer'] = window['dataLayer'] || {};
    window.scrollTo(0, 0);
  this.fetchContactDetails();
  this.fetchHours();
  window['dataLayer'] = window['dataLayer'] || {};
  window['dataLayer'] = window['dataLayer'] || [];
  window['dataLayer'].push({
    'event': this.eventName,
    'location' : this.heading,
    'date': today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
    'time': today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(),
  });
}

  get f() { return this.contactForm.controls; }

  public fetchContactDetails() {
    this.contactsLocation1 = contactsLocation1;
    this.contactsLocation2 = contactsLocation2;
    this.contactsLocation3 = contactsLocation3;
  }

  public fetchOg() {
    this.og = ogContactPage;
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
  // document.getElementsByTagName('head')[0].appendChild(node);
  document.head.appendChild(node);

}

public fetchMetaData() {
  this.contactPageTitle = contactPageTitle;
  this.contactPageContent = contactPageContent;
}

  public fetchHours() {
    this.hoursLocation1 = hoursLocation1;
    this.hoursLocation2 = hoursLocation2;
    this.hoursLocation3 = hoursLocation3;
  }

onSubmit() {
  console.log('this.contactForm.value', this.contactForm.value);
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

  if (this.contactForm.value.location === 'Carroll County Storage - McKenzie') {
    this.receiveremail = contactsLocation1[1].data;
  } else if (this.contactForm.value.location === 'Carroll County Storage - Huntingdon') {
    this.receiveremail = contactsLocation2[1].data;
  } else if (this.contactForm.value.location === 'Carroll County Storage at the Airport') {
    this.receiveremail = contactsLocation3[1].data;
  }


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
