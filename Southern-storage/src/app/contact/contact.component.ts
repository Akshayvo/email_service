import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import { contactsRockyCreek, hoursRockyCreek,
         contactsAgricola, hoursAgricola,
         contactsBarton, hoursBarton } from '../data/contact';
import { WINDOW } from '@ng-toolkit/universal';
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactsAgricola: object;
  contactsRockyCreek: object;
  contactsBarton: object;
  hoursRockyCreek: object;
  hoursAgricola: object;
  hoursBarton: object;
  placeName: string;
  name: string;
  email: any;
  phone: any;
  location: any;
  message: string;
  places = [ 'Southern Self Storage - Rocky Creek',
             'Southern Self Storage - Agricola',
             'Southern Self Storage - Barton' ];
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
      content: `Do you have a question about our services or your account with Southern Storage?
                Find the contact information for all of our locations here!`
    });
    this.titleService.setTitle('Contact Us | Southern Storage');
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
  }

  get f() { return this.contactForm.controls; }

  public fetchContactDetails() {
    this.contactsRockyCreek = contactsRockyCreek;
    this.contactsAgricola = contactsAgricola;
    this.contactsBarton = contactsBarton;
  }

  public fetchHours() {
    this.hoursRockyCreek = hoursRockyCreek;
    this.hoursAgricola = hoursAgricola;
    this.hoursBarton = hoursBarton;
  }

onSubmit() {
  this.submitted = true;

 // stop here if form is invalid
 if (this.contactForm.invalid) {
     return;
 } else {

   if (this.contactForm.value.location === 'Southern Self Storage - Rocky Creek') {
    this.receiveremail = this.contactsRockyCreek[2].data;
  } else if (this.contactForm.value.location === 'Southern Self Storage - Agricola') {
    this.receiveremail = this.contactsAgricola[2].data;
  } else if (this.contactForm.value.location === 'Southern Self Storage - Barton') {
    this.receiveremail = this.contactsBarton[2].data;
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
       this.contactForm.reset();
 }
}


}
