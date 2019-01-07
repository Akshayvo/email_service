import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import { contactsLocation2, hoursLocation1, contactsLocation1, hoursLocation2  } from '../data/contact';
import { WINDOW } from '@ng-toolkit/universal';
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactsLocation2: object;
  contactsLocation1: object;
  hoursLocation1: object;
  hoursLocation2: object;
  placeName: string;

  name: string;
  email: any;
  phone: any;
  location: any;
  message: string;
  places = [ 'Your Self Storage - Location1', 'Your Self Storage - Location2' ];
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
      name: 'contact-meta-name',
      content: `contact-meta-content`
    });
    this.titleService.setTitle('Contact-PageTitle');
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


  if ( this.placeName === 'Location1' ) {
    this.contactForm.value.location = 'Your Self Storage - Location1';
  }  else if ( this.placeName === 'Location2' ) {
    this.contactForm.value.location = 'Your Self Storage - Location2';
  }
  }

  get f() { return this.contactForm.controls; }

  public fetchContactDetails() {
    this.contactsLocation2 = contactsLocation2;
    this.contactsLocation1 = contactsLocation1;
  }

  public fetchHours() {
    this.hoursLocation1 = hoursLocation1;
    this.hoursLocation2 = hoursLocation2;
  }

onSubmit() {
  this.submitted = true;

 // stop here if form is invalid
 if (this.contactForm.invalid) {
     return;
 } else {
   this.isSubmitted = true;

   if (this.contactForm.value.location === 'Your Self Storage - Location1') {
    this.receiveremail = this.contactsLocation1[2].data;
  } else if (this.contactForm.value.location === 'Your Self Storage - Location2') {
    this.receiveremail = this.contactsLocation2[2].data;
  }
  this.completeMessage = `<strong>Phone:</strong> ${this.contactForm.value.phone}, <br/>
                          <strong>Message:</strong> ${this.contactForm.value.message}`;

       const body = {
         name: this.contactForm.value.name,
         email: this.contactForm.value.email,
         receiveremail: this.receiveremail,
         message: this.completeMessage,
       };
       this.emailService.sendEmail(body)
         .subscribe((response: any) => {
           if (response.result != null) {
            //  alert(response.message);
           } else {
            //  alert(response.message);
           }
         }, (err) => {
           console.log('Error :', err);
         });
       this.submitted = false;
       this.contactForm.reset();
 }
}


}
