import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import { contactsMall, hoursMall, contactsVillage, hoursVillage  } from '../data/contact';
import { WINDOW } from '@ng-toolkit/universal';
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactsMall: object;
  contactsVillage: object;
  hoursMall: object;
  hoursVillage: object;
  placeName: string;

  name: string;
  email: any;
  phone: any;
  location: any;
  message: string;
  places = [ 'Victor Self Storage - Mall', 'Victor Self Storage - Village' ];
  receiveremail: string;
  completeMessage: string;


  contactForm: FormGroup;
  submitted = false;
  isSubmitted = false;
  private sub: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private emailService: EmailService,
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
    private formBuilder: FormBuilder
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Have a question or concern about self storage units,
                climate controlled storage units or U-Haul rentals?`
    });
    this.titleService.setTitle('Contact Victor Self Storage');
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.placeName = params['name'];
    });

    this.fetchContactDetails();
    this.fetchHours();
    this.window.scrollTo(0, 0);
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required,
                Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,5}$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      location: ['', Validators.required]
  });


  if ( this.placeName === 'mall' ) {
    this.contactForm.value.location = 'Victor Self Storage - Mall';
  }  else if ( this.placeName === 'village' ) {
    this.contactForm.value.location = 'Victor Self Storage - Village';
  } else if (this.placeName === undefined ) {
    this.contactForm.value.location = '';
  }

  // console.log(this.placeName);
  // console.log(this.contactForm.value.location);
  }

  get f() { return this.contactForm.controls; }

  public fetchContactDetails() {
    this.contactsMall = contactsMall;
    this.contactsVillage = contactsVillage;
  }

  public fetchHours() {
    this.hoursMall = hoursMall;
    this.hoursVillage = hoursVillage;
  }

onSubmit() {
  this.submitted = true;

 // stop here if form is invalid
 if (this.contactForm.invalid) {
     return;
 } else {
   this.isSubmitted = true;

   if (this.contactForm.value.location === 'Victor Self Storage - Mall') {
    this.receiveremail = this.contactsMall[2].data;
  } else if (this.contactForm.value.location === 'Victor Self Storage - Village') {
    this.receiveremail = this.contactsVillage[2].data;
  }
  this.completeMessage = `<strong>Phone:</strong> ${this.contactForm.value.phone}, <br/>
                          <strong>Message:</strong> ${this.contactForm.value.message}`;

       const body = {
         name: this.contactForm.value.name,
         email: this.contactForm.value.email,
         receiveremail: this.receiveremail,
         message: this.completeMessage,
       };
      //  console.log(body);
       this.emailService.sendEmail(body)
         .subscribe((response: any) => {
           // console.log('Authentication response:', response);
           if (response.result != null) {
             alert(response.message);
           } else {
             // console.log(`response`, response.result);
             alert(response.message);
           }
         }, (err) => {
           console.log('Error :', err);
         });
       this.submitted = false;
       // MailService(body);
       this.contactForm.reset();
 }
}

  private validateEmail(value: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      return (true);
    }
    return (false);
  }

  private validatePhone(value: string) {
    const isValidNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,5}$/.test(value);
    if (isValidNumber) {
      return (true);
    } else {
      // alert('false');
      return (false);
    }
  }

  private validateNull(value: string) {
    if (value === undefined || value === '') {
      return (true);
    }
    // console.log(value);
    return (false);
  }

}
