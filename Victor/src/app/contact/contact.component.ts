import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import { contacts1, contacts2, hours1, hours2 } from '../data/contact';
import { WINDOW } from '@ng-toolkit/universal';
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts1: object;
  contacts2: object;
  hours1: object;
  hours2: object;
  placeName: string;
  name: string;
  email: any;
  phone: any;
  location: any;
  message: string;
  places = [ 'Victor Self Storage - Mall',
             'Victor Self Storage - Village' ];
  receiveremail: string;
  completeMessage: string;


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
    window.scrollTo(0, 0);
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required,
                Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,5}$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      location: ['', Validators.required]
  });
  }

  get f() { return this.contactForm.controls; }

  public fetchContactDetails() {
    this.contacts1 = contacts1;
    this.contacts2 = contacts2;
  }

  public fetchHours() {
    this.hours1 = hours1;
    this.hours2 = hours2;
  }

onSubmit() {
  this.submitted = true;

 // stop here if form is invalid
 if (this.contactForm.invalid) {
     return;
 } else {

   if (this.contactForm.value.location === 'Victor Self Storage - Mall') {
    this.receiveremail = this.contacts1[2].data;
  } else if (this.contactForm.value.location === 'Victor Self Storage - Village') {
    this.receiveremail = this.contacts2[2].data;
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
