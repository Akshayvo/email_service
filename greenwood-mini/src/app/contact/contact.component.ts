import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2, contactsLocation3,
          hoursLocation3, hoursLocation4, contactsLocation4,
          hoursLocation5, contactsLocation5,
          hoursLocation6, hoursLocation7,hoursLocation8,hoursLocation9,hoursLocation10,hoursLocation11,hoursLocation12, contactsLocation6, contactsLocation7, contactsLocation8 ,contactsLocation9,contactsLocation10,contactsLocation11,contactsLocation12 } from '../data/contact';
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
    } else if ( this.locationId === '2' || this.locationId === 2) {
      this.fetchContactDetailsLocation2();
      this.mailSent = false;
    } else if ( this.locationId === '3' || this.locationId === 3) {
      this.fetchContactDetailsLocation3();
        this.mailSent = false;
    } else if ( this.locationId === '4' || this.locationId === 4 ) {
      this.fetchContactDetailsLocation4();
      this.mailSent = false;
    } else if ( this.locationId === '5' || this.locationId === 5 ) {
      this.fetchContactDetailsLocation5();
    } else if ( this.locationId === '6' || this.locationId === 6 ) {
      this.fetchContactDetailsLocation6();
    }
    else if ( this.locationId === '7' || this.locationId === 7 ) {
      this.fetchContactDetailsLocation7();
    }
    else if ( this.locationId === '8' || this.locationId === 8 ) {
      this.fetchContactDetailsLocation8();
    }
    else if ( this.locationId === '9' || this.locationId === 9 ) {
      this.fetchContactDetailsLocation9();
    }
    else if ( this.locationId === '10' || this.locationId === 10 ) {
      this.fetchContactDetailsLocation10();
    }
    else if ( this.locationId === '11' || this.locationId === 11 ) {
      this.fetchContactDetailsLocation11();
    }
    else if ( this.locationId === '12' || this.locationId === 12 ) {
      this.fetchContactDetailsLocation12();
    }
  }

  public fetchTableData() {
    this.tableData = tableDataContactPage;
  }
  
  public fetchTableHeader() {
    this.tableHeader = tableHeader;
  }
  
  public fetchContactDetailsLocation1() {
    this.heading = `Boxer Storage - Evanston Ave  Location`;
    this.contactDetails = contactsLocation1;
    this.hoursDetails = hoursLocation1;
  }

  public fetchContactDetailsLocation2() {
    this.heading = `Boxer Storage - Howard City  Location`;
    this.contactDetails = contactsLocation2;
    this.hoursDetails = hoursLocation2;
  }

  public fetchContactDetailsLocation3() {
    this.heading = `Boxer Storage - Ionia Location`;
    this.contactDetails = contactsLocation3;
    this.hoursDetails = hoursLocation3;
  }

  public fetchContactDetailsLocation4() {
    this.heading = `Boxer Storage - Alpine Location`;
    this.contactDetails = contactsLocation4;
    this.hoursDetails = hoursLocation4;
  }

  public fetchContactDetailsLocation5() {
    this.heading = `Boxer Storage - Red barn Location`;
    this.contactDetails = contactsLocation5;
    this.hoursDetails = hoursLocation5;
  }

  public fetchContactDetailsLocation6() {
    this.heading = `Boxer Storage - Wayland Westside Location`;
    this.contactDetails = contactsLocation6;
    this.hoursDetails = hoursLocation6;
  }

  public fetchContactDetailsLocation7() {
    this.heading = `Boxer Storage - Wayland Mill Street Location`;
    this.contactDetails = contactsLocation7;
    this.hoursDetails = hoursLocation7;
  }

  public fetchContactDetailsLocation8() {
    this.heading = `Boxer Storage - Wayland Southside Location`;
    this.contactDetails = contactsLocation8;
    this.hoursDetails = hoursLocation8;
  }

  public fetchContactDetailsLocation9() {
    this.heading = `Boxer Storage - Dutton Location`;
    this.contactDetails = contactsLocation9;
    this.hoursDetails = hoursLocation9;
  }

  public fetchContactDetailsLocation10() {
    this.heading = `Boxer Storage - M-45 Location`;
    this.contactDetails = contactsLocation10;
    this.hoursDetails = hoursLocation10;
  }

  public fetchContactDetailsLocation11() {
    this.heading = `Boxer Storage - Otsego Location`;
    this.contactDetails = contactsLocation11;
    this.hoursDetails = hoursLocation11;
  }
  public fetchContactDetailsLocation12() {
    this.heading = `Boxer Storage - Allendale Location`;
    this.contactDetails = contactsLocation12;
    this.hoursDetails = hoursLocation12;
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
