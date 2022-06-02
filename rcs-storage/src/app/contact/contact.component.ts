import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2, contactsLocation3,
          hoursLocation3  } from '../data/contact';
import { WINDOW } from '@ng-toolkit/universal';
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { LocationService } from '../services/location.service';
import { CanonicalService } from '../services/canonical.service';
import { ogContactPage, twitterContactPage } from '../data/script';
import { tableDataContactPage, tableHeader } from '../data/pay-rent';
import { contactPageTitle, contactPageContent } from '../data/title';

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
  subject: any;
  script: any;
  contactForm: FormGroup;
  submitted = false;
  mailSent = false;
  eventName: string;
  og: any;
  twitter: any;
  tableData: any;
  tableHeader: any;
  contactPageTitle: string;
  contactPageContent: string;

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
    window.scrollTo(0, 0);
    this.receiveMessage();
    this.fetchTableHeader();
    this.fetchTableData();

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

  receiveMessage() {
    this.data.currentLocation.subscribe(locationId => {
      this.locationId = locationId;
      this.dataupdate();
    });
  }

  public dataupdate() {
    if ( this.locationId === '1' || this.locationId === 1 ) {
      this.fetchContactDetailsLocation1();
      this.mailSent = false;
    } else if ( this.locationId === '2' ) {
      this.fetchContactDetailsLocation2();
      this.mailSent = false;
    } else if ( this.locationId === '3' ) {
      this.fetchContactDetailsLocation3();
    }
  }

  public fetchTableData() {
    this.tableData = tableDataContactPage;
  }
  
  public fetchTableHeader() {
    this.tableHeader = tableHeader;
  }
  
  public fetchContactDetailsLocation1() {
    this.heading = `RCS Storage - West`;
    this.contactDetails = contactsLocation1;
    this.hoursDetails = hoursLocation1;
  }

  public fetchContactDetailsLocation2() {
    this.heading = `RCS Storage - East`;
    this.contactDetails = contactsLocation2;
    this.hoursDetails = hoursLocation2;
  }

  public fetchContactDetailsLocation3() {
    this.heading = `Self Storage Facility - Location-3`;
    this.contactDetails = contactsLocation3;
    this.hoursDetails = hoursLocation3;
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
