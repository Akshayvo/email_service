import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../services/email.service';
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { contactsLocation1, hoursLocation1,
  contactsLocation2, hoursLocation2,
  contactsLocation3, hoursLocation3,
  contactsLocation4, hoursLocation4 } from '../data/contact';
import { headingLocation1, headingLocation2, headingLocation3, headingLocation4} from '../data/location';
@Component({
  selector: 'app-reserve-unit',
  templateUrl: './reserve-unit.component.html',
  styleUrls: ['./reserve-unit.component.scss']
})
export class ReserveUnitComponent implements OnInit {

  id: number;
  tabs: any;
  heading: string;
  currentActiveTab: any = 'Reserve Unit';

  contactDetails: any;
  hoursDetails: any;
  placeName: string;
  name: string;
  email: any;
  phone: any;
  message: string;
  receiveremail: string;
  completeMessage: string;
  locationId: any;

  contactForm: FormGroup;
  submitted = false;
  mailSent = false;
  subject: string;

  constructor(private router: Router,
    private emailService: EmailService,
    private formBuilder: FormBuilder
    ) {

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required,
                Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,5}$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      subject: ['']
  });
     }

  ngOnInit() {
    this.isSomePage();
  }

  get f() { return this.contactForm.controls; }



  public isSomePage() {
    if (this.router.url.includes('/location/730-kenton-station')) {
      this.id = 1;
      this.contactDetails = contactsLocation1;
      this.heading = headingLocation1;
    } else if (this.router.url.includes('/location/751-kenton-station')) {
      this.id = 2;
      this.contactDetails = contactsLocation2;
      this.heading = headingLocation2;
    } else  if (this.router.url.includes('/location/augusta'))  {
      this.id = 3;
      this.contactDetails = contactsLocation3;
      this.heading = headingLocation3;
    } else  if (this.router.url.includes('/location/113-mcDonald-parkway'))  {
      this.id = 4;
      this.contactDetails = contactsLocation4;
      this.heading = headingLocation4;
    }
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
  
    this.receiveremail = this.contactDetails[2].data;
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
              this.contactForm.reset();
             } else {
             }
           }, (err) => {
             console.log('Error :', err);
           });
         this.submitted = false;
   }
  }
}
