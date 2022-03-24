import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import {
  contactsHomePage,
  contactsLocation1,
  contactsLocation2,
  contactsLocation3,
  contactsLocation4,
  contactsLocation5,
  contactsLocation6,
  contactsLocation7,
  contactsLocation8,
  hoursHomePage,
  hoursLocation1,
  hoursLocation2,
  hoursLocation3,
  hoursLocation4,
  hoursLocation5,
  hoursLocation6, 
  hoursLocation7,
  hoursLocation8
} from '../data/contact';
import { WINDOW } from '@ng-toolkit/universal';
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { CanonicalService } from "../services/canonical.service";
import {
  
  ogContactPage,
  twitterContactPage,
} from "../data/script";
import { contactPageTitle, contactPageContent } from '../data/title';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  places = [
    {
      id: 0,
      name: 'AFFORDABLE STORAGE #1 - 260 N GROVE',
    },
    {
      id: 1,
      name: 'AFFORDABLE STORAGE #2 - 201 N GROVE',
    },
    {
      id: 2,
      name: 'AFFORDABLE STORAGE #3 - 246 W. SOUTH LANE',
    },
    {
      id: 3,
      name: 'AFFORDABLE STORAGE #4 - 817 S. GETTY',
    },
    {
      id: 4,
      name: 'AFFORDABLE STORAGE #5 - 430 S HWY 83',
    },
    {
      id: 5,
      name: 'AFFORDABLE STORAGE #6 - 500 E. GARDEN',
    },
    {
      id: 6,
      name: 'AFFORDABLE STORAGE #7 - 2633 E. MAIN ST',
    },
    {
      id: 7,
      name: 'AFFORDABLE STORAGE #8 - 244 N. GROVE',
    },
 ];

  contactsLocation2: any;
  contactsLocation1: any;
  contactsLocation6: any;
  contactsLocation4: any;
  contactsLocation3: any;
  contactsLocation5: any;
  contactsLocation8: any;
  hoursLocation1: any;
  hoursLocation2: any;
  hoursLocation3: any;
  hoursLocation5: any;
  hoursLocation7: any;
  contactsLocation7: any;
  hoursLocation6: any;
  hoursLocation4: any;
  hoursLocation8: any;
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
  og: any;
  twitter: any;
  contactPageTitle: string;
  contactPageContent: string;


  contactForm: FormGroup;
  submitted = false;
  mailSent = false;
  private sub: any;


  constructor(
    @Inject(WINDOW) private window: Window,
    private emailService: EmailService,
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
    private formBuilder: FormBuilder
  ) {
    // this.meta.addTag({
    //   name: 'description',
    //   content: `Do you have a question about your account, or our self storage, boat and
    //   recreational vehicle storage? Use our contact form, or call us today!`
    // });
    // this.titleService.setTitle('Contact Us  | Affordable Storages');
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

  get f() { return this.contactForm.controls; }

  public fetchOg() {
    this.og = ogContactPage;
}

public fetchTwitter() {
    this.twitter = twitterContactPage;
}


public fetchMetaData() {
  this.contactPageTitle = contactPageTitle;
  this.contactPageContent = contactPageContent;
}

  public fetchContactDetails() {
    this.contact = contactsHomePage;
    this.contactsLocation3 = contactsLocation3;
    this.contactsLocation1 = contactsLocation1;
    this.contactsLocation2 = contactsLocation2;
    this.contactsLocation4 = contactsLocation4;
    this.contactsLocation6 = contactsLocation6;
    this.contactsLocation5 = contactsLocation5;
    this.contactsLocation7 = contactsLocation7;
    this.contactsLocation8 = contactsLocation8;
  }

  public fetchHours() {
    this.hours = hoursHomePage;
    this.hoursLocation2 = hoursLocation2;
    this.hoursLocation1 = hoursLocation1;
    this.hoursLocation3 = hoursLocation3;
    this.hoursLocation5 = hoursLocation5;
    this.hoursLocation4 = hoursLocation4;
    this.hoursLocation6 = hoursLocation6;
    this.hoursLocation7 = hoursLocation7;
    this.hoursLocation8 = hoursLocation8;
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

   if (this.contactForm.value.location === 'AFFORDABLE STORAGE #1 - 260 N GROVE') {
    this.receiveremail = this.contactsLocation1[2].data;
  } else if (this.contactForm.value.location === 'AFFORDABLE STORAGE #2 - 201 N GROVE') {
    this.receiveremail = this.contactsLocation2[2].data;
  } else if (this.contactForm.value.location === 'AFFORDABLE STORAGE #3 - 246 W. SOUTH LANE') {
    this.receiveremail = this.contactsLocation3[2].data;
  } else if (this.contactForm.value.location === 'AFFORDABLE STORAGE #4 - 817 S. GETTY') {
    this.receiveremail = this.contactsLocation4[2].data;
  } else if (this.contactForm.value.location === 'AFFORDABLE STORAGE #5 - 430 S HWY 83') {
    this.receiveremail = this.contactsLocation5[2].data;
  } else if (this.contactForm.value.location === 'AFFORDABLE STORAGE #6 - 500 E. GARDEN') {
    this.receiveremail = this.contactsLocation6[2].data;
  } else if (this.contactForm.value.location === 'AFFORDABLE STORAGE #7 - 2633 E. MAIN ST') {
    this.receiveremail = this.contactsLocation7[2].data;
  } else if (this.contactForm.value.location === 'AFFORDABLE STORAGE #8 - 244 N. GROVE') {
    this.receiveremail = this.contactsLocation8[3].data;
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