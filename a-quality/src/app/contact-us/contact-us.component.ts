import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2, } from '../data/contact';
import { WINDOW } from '@ng-toolkit/universal';
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { LocationService } from '../services/location.service';
import { contactPageLocation1Script, ogContactPage, ogContactPageLocation1, ogContactPageLocation2,  twitterContactPageLocation1, twitterContactPageLocation2,} from '../data/script';
import { CanonicalService } from '../services/canonical.service';
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
      content: `Have a question for our staff? Use this handy contact form, or our contact information. We'll get right back to you!`
    });
    this.titleService.setTitle('Contact Us | A-Quality Storage');

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
    if (this.router.url.includes('line-drive')) {
      this.og = ogContactPageLocation1;
    } else {
      if (this.router.url.includes('holly-avenue')) {
        this.og = ogContactPageLocation2;
      }
    }
}

public fetchTwitter() {
    if (this.router.url.includes('line-drive')) {
      this.twitter = twitterContactPageLocation1;
    } else {
      if (this.router.url.includes('holly-avenue')) {
        this.twitter = twitterContactPageLocation2;
      }
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

  public fetchLocationDetails() {
    if (this.router.url.includes('line-drive')) {
      this.fetchContactDetailsLocation1();
    } else if (this.router.url.includes('holly-avenue')) {
      this.fetchContactDetailsLocation2();
    }
  }

  public fetchContactDetailsLocation1() {
    this.heading = `A-Quality Storage - Line Drive Location`;
    this.locationId = '1'
    this.contactDetails = contactsLocation1;
    this.hoursDetails = hoursLocation1;
  }
  
  public fetchContactDetailsLocation2() {
    this.locationId = '2'
    this.heading = `A-Quality Storage - Holly Avenue Location`;
    this.contactDetails = contactsLocation2;
    this.hoursDetails = hoursLocation2;
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
