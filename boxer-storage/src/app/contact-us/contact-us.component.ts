import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import { contactsLocation1, hoursLocation1, accessHoursLocation1,accessHoursLocation2,accessHoursLocation3,accessHoursLocation4,accessHoursLocation5,accessHoursLocation6,accessHoursLocation7,accessHoursLocation8,accessHoursLocation9,accessHoursLocation10,accessHoursLocation11,accessHoursLocation12,
          contactsLocation2, hoursLocation2, contactsLocation3,
          hoursLocation3, hoursLocation4, contactsLocation4,
          hoursLocation5, contactsLocation5,hoursLocation9,hoursLocation10,hoursLocation11,hoursLocation12,
          hoursLocation6,hoursLocation7,hoursLocation8, contactsLocation6,contactsLocation7,contactsLocation8,contactsLocation9,contactsLocation10,contactsLocation11,contactsLocation12  } from '../data/contact';
import { WINDOW } from '@ng-toolkit/universal';
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { LocationService } from '../services/location.service';
import { contactPageLocation1Script, contactPageLocation2Script,contactPageLocation3Script,contactPageLocation4Script,contactPageLocation5Script,contactPageLocation6Script,contactPageLocation7Script,contactPageLocation8Script, contactPageLocation9Script,contactPageLocation10Script,contactPageLocation11Script,contactPageLocation12Script,
  ogContactPage, ogContactPageLocation1, ogContactPageLocation2,ogContactPageLocation3,ogContactPageLocation4,ogContactPageLocation5,ogContactPageLocation6,ogContactPageLocation7,ogContactPageLocation8,ogContactPageLocation9,ogContactPageLocation10,ogContactPageLocation11,ogContactPageLocation12,
  twitterContactPage, twitterContactPageLocation1, twitterContactPageLocation2,twitterContactPageLocation3,twitterContactPageLocation4,twitterContactPageLocation5,twitterContactPageLocation6,twitterContactPageLocation7,twitterContactPageLocation8,twitterContactPageLocation9,twitterContactPageLocation10,twitterContactPageLocation11,twitterContactPageLocation12 } from '../data/script';
import { CanonicalService } from '../services/canonical.service';
import { contactPageTitle, contactPageContent } from '../data/title';
import { environment } from '../../environments/environment';

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
  access: any;
  
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
      if (this.router.url.includes(`${environment.locationName}/evanston-ave`)) {
    this.script = contactPageLocation1Script;
      }
      else if (this.router.url.includes(`${environment.locationName}/howard-city`)) {
    this.script = contactPageLocation2Script;
      }
      else if (this.router.url.includes(`${environment.locationName}/ionia`)) {
    this.script = contactPageLocation3Script;
      }
      else if (this.router.url.includes(`${environment.locationName}/alpine`)) {
    this.script = contactPageLocation4Script;
      }
      else if (this.router.url.includes(`${environment.locationName}/red-barn`)) {
        this.script = contactPageLocation5Script;
          }
      else if (this.router.url.includes(`${environment.locationName}/wayland-westside`)) {
        this.script = contactPageLocation6Script;
          }
      else if (this.router.url.includes(`${environment.locationName}/wayland-mill`)) {
        this.script = contactPageLocation7Script;
          }

      else if (this.router.url.includes(`${environment.locationName}/wayland-southside`)) {
        this.script = contactPageLocation8Script;
          }

      else if (this.router.url.includes(`${environment.locationName}/dutton`)) {
        this.script = contactPageLocation9Script;
          }
      else if (this.router.url.includes(`${environment.locationName}/m45`)) {
        this.script = contactPageLocation10Script;
          }
      else if (this.router.url.includes(`${environment.locationName}/otsego`)) {
        this.script = contactPageLocation11Script;
          }
          else if (this.router.url.includes(`${environment.locationName}/allendale`)) {
            this.script = contactPageLocation12Script;
              }
  }

  public fetchOg() {
    if (this.router.url.includes('evanston-ave')) {
      this.og = ogContactPageLocation1;
    } 
    else if (this.router.url.includes('howard-city')) {
      this.og = ogContactPageLocation2;
    } 
    else if (this.router.url.includes('ionia')) {
      this.og = ogContactPageLocation3;
    } 
    else if (this.router.url.includes('alpine')) {
      this.og = ogContactPageLocation4;
    } 
    else if (this.router.url.includes('red-barn')) {
      this.og = ogContactPageLocation5;
    } else if (this.router.url.includes('wayland-westside')) {
      this.og = ogContactPageLocation6;
    } else if (this.router.url.includes('wayland-mill')) {
      this.og = ogContactPageLocation7;
    } else if (this.router.url.includes('wayland-southside')) {
      this.og = ogContactPageLocation8;
    }
    else if (this.router.url.includes('dutton')) {
      this.og = ogContactPageLocation9;
    } 
    else if (this.router.url.includes('m45')) {
      this.og = ogContactPageLocation10;
    } 
    else if (this.router.url.includes('otsego')) {
      this.og = ogContactPageLocation11;
    } 
    else if (this.router.url.includes('allendale')) {
      this.og = ogContactPageLocation12;
    }
    // else if (this.router.url.includes('robertsdale')) {
    //   this.og = ogContactPageLocation6;
    // }
}

public fetchMetaData() {
  this.contactPageTitle = contactPageTitle;
  this.contactPageContent = contactPageContent;
}

public fetchTwitter() {
  if (this.router.url.includes('evanston-ave')) {
    this.twitter = twitterContactPageLocation1;
  }
  else if (this.router.url.includes('howard-city')) {
    this.twitter = twitterContactPageLocation2;
  }
   else if (this.router.url.includes('ionia')) {
    this.twitter = twitterContactPageLocation3;
  }
  else if (this.router.url.includes('alpine')) {
    this.twitter = twitterContactPageLocation4;
  }
   else if (this.router.url.includes('red-barn')) {
    this.twitter = twitterContactPageLocation5;
  } else if (this.router.url.includes('wayland-westside')) {
    this.twitter = twitterContactPageLocation6;
  } else if (this.router.url.includes('wayland-mill')) {
    this.twitter = twitterContactPageLocation7;
  } else if (this.router.url.includes('wayland-southside')) {
    this.twitter = twitterContactPageLocation8;
  }
  else if (this.router.url.includes('dutton')) {
    this.twitter = twitterContactPageLocation9;
  }
  else if (this.router.url.includes('m45')) {
    this.twitter = twitterContactPageLocation10;
  }
  else if (this.router.url.includes('otsego')) {
    this.twitter = twitterContactPageLocation11;
  }
  else if (this.router.url.includes('allendale')) {
    this.twitter = twitterContactPageLocation12;
  }
//  else if (this.router.url.includes('robertsdale')) {
  //   this.twitter = twitterContactPageLocation6;
  // }
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
  //   } else if ( this.locationId === '4' ) {
  //     this.fetchContactDetailsLocation4();
  //   }
  // }

  public fetchLocationDetails() {
    if (this.router.url.includes('evanston-ave')) {
      this.fetchContactDetailsLocation1();
    }
    else if (this.router.url.includes('howard-city')) {
      this.fetchContactDetailsLocation2();
    }
    else if (this.router.url.includes('ionia')) {
      this.fetchContactDetailsLocation3();
    }
     else if (this.router.url.includes('alpine')) {
      this.fetchContactDetailsLocation4();
    }
     else if (this.router.url.includes('red-barn')) {
      this.fetchContactDetailsLocation5();
    } else if (this.router.url.includes('wayland-westside')) {
      this.fetchContactDetailsLocation6();
    } else if (this.router.url.includes('wayland-mill')) {
      this.fetchContactDetailsLocation7();
    } else if (this.router.url.includes('wayland-southside')) {
      this.fetchContactDetailsLocation8();
    } 
    else if (this.router.url.includes('dutton')) {
      this.fetchContactDetailsLocation9();
    } 
    else if (this.router.url.includes('m45')) {
      this.fetchContactDetailsLocation10();
    } 
    else if (this.router.url.includes('otsego')) {
      this.fetchContactDetailsLocation11();
    } 
    else if (this.router.url.includes('allendale')) {
      this.fetchContactDetailsLocation12();
    }
    // else if (this.router.url.includes('robertsdale')) {
    //   this.fetchContactDetailsLocation6();
    // }
  }

  public fetchContactDetailsLocation1() {
    this.heading = `Boxer Storage - Evanston Ave  Location`;
    this.locationId = '1'
    this.contactDetails = contactsLocation1;
    this.hoursDetails = hoursLocation1;
    this.access = accessHoursLocation1;
  }
  
  public fetchContactDetailsLocation2() {
    this.locationId = '2'
    this.heading = `Boxer Storage - Howard City Location`;
    this.contactDetails = contactsLocation2;
    this.hoursDetails = hoursLocation2;
    this.access = accessHoursLocation2;
  }

  public fetchContactDetailsLocation3() {
    this.locationId = '3'
    this.heading = `Boxer Storage - Ionia Location`;
    this.contactDetails = contactsLocation3;
    this.hoursDetails = hoursLocation3;
    this.access = accessHoursLocation3;
  }

  public fetchContactDetailsLocation4() {
    this.locationId = '4'
    this.heading = `Boxer Storage - Alpine Location`;
    this.contactDetails = contactsLocation4;
    this.hoursDetails = hoursLocation4;
    this.access = accessHoursLocation4;
  }
  public fetchContactDetailsLocation5() {
    this.heading = `Boxer Storage - Red Barn Location`;
    this.locationId = '5'
    this.contactDetails = contactsLocation5;
    this.hoursDetails = hoursLocation5;
    this.access = accessHoursLocation5;
  } 

  public fetchContactDetailsLocation6() {
    this.heading = `Boxer Storage - Wayland Westside Location`;
    this.locationId = '6'
    this.contactDetails = contactsLocation6;
    this.hoursDetails = hoursLocation6;
    this.access = accessHoursLocation6;
  }

  public fetchContactDetailsLocation7() {
    this.heading = `Boxer Storage - Wayland Mill Street Location`;
    this.locationId = '7'
    this.contactDetails = contactsLocation7;
    this.hoursDetails = hoursLocation7;
    this.access = accessHoursLocation7;
  }

  public fetchContactDetailsLocation8() {
    this.heading = `Boxer Storage - Wayland Southside Location`;
    this.locationId = '8'
    this.contactDetails = contactsLocation8;
    this.hoursDetails = hoursLocation8;
    this.access = accessHoursLocation8;
  }
  public fetchContactDetailsLocation9() {
    this.heading = `Boxer Storage - Dutton Location`;
    this.locationId = '9'
    this.contactDetails = contactsLocation9;
    this.hoursDetails = hoursLocation9;
    this.access = accessHoursLocation9;
  }
  public fetchContactDetailsLocation10() {
    this.heading = `Boxer Storage - M-45 Location`;
    this.locationId = '10'
    this.contactDetails = contactsLocation10;
    this.hoursDetails = hoursLocation10;
    this.access = accessHoursLocation10;
  }
  public fetchContactDetailsLocation11() {
    this.heading = `Boxer Storage - Otsego Location`;
    this.locationId = '11'
    this.contactDetails = contactsLocation11;
    this.hoursDetails = hoursLocation11;
    this.access = accessHoursLocation11;
  }
  public fetchContactDetailsLocation12() {
    this.heading = `Boxer Storage - Allendale Location`;
    this.locationId = '12'
    this.contactDetails = contactsLocation12;
    this.hoursDetails = hoursLocation12;
    this.access = accessHoursLocation12;
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
    this.contactForm.value.subject = 'Website Form Submission ';
    
    
  }

  this.receiveremail = this.contactDetails[2].email;
  this.completeMessage = `<strong>Phone:</strong> ${this.contactForm.value.phone}, <br/>
                          <strong>Message:</strong> ${this.contactForm.value.message}`;

       const body = {
         name: this.contactForm.value.name,
         email: this.contactForm.value.email,
         receiveremail: this.receiveremail,
         message: this.completeMessage,
         subject: this.contactForm.value.subject + this.heading,
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
