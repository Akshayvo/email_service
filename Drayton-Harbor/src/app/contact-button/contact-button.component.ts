import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';
import { contact, hours, socialLinks } from '../data/contact';
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.scss']
})
export class ContactButtonComponent implements OnInit {

  // form: FormGroup;
  hours: any;
  nameCB: string;
  emailCB: any;
  phoneCB: any;
  messageCB: any;
  contactInfo: any;
  receiveremail: string;
  completeMessage: string;
  socialLinks: any;
  contactForm: FormGroup;

  valid = true;
  submitted = false;
  isSubmitted = false;
  head: any;
  flag: boolean;

  constructor(
    private emailService: EmailService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    this.fetchsocialLinks();
    this.contactForm = this.formBuilder.group({
      nameCB: ['', Validators.required],
      phoneCB: ['', Validators.required],
      emailCB: ['', [Validators.required, Validators.email]],
      messageCB: ['', Validators.required]
  });
  }

  get f() { return this.contactForm.controls; }

  public fetchContactDetails() {
    this.contactInfo = contact;
  }

  public fetchHours() {
    this.hours = hours;
  }

  public fetchsocialLinks() {
    this.socialLinks = socialLinks;
  }

  onSubmit() {
    this.submitted = true;

   // stop here if form is invalid
   if (this.contactForm.invalid) {
       return;
   } else {
     console.log(this.contactForm.value);
     this.isSubmitted = true;
     this.receiveremail = this.contactInfo[1].data;

         this.completeMessage = `phone: ${this.contactForm.value.phoneCB}, <br/>
                                message: ${this.contactForm.value.messageCB}`;

         const body = {
           name: this.contactForm.value.nameCB,
           email: this.contactForm.value.emailCB,
           receiveremail: this.receiveremail,
           message: this.completeMessage,
         };
         console.log(body);
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
}