import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';
import { contact, hours } from '../data/contact';
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
  // socialLinks: any;
  contactForm: FormGroup;
  subjectCB: string;
  valid = true;
  submitted = false;
  mailSent = false;
  head: any;
  flag: boolean;

  constructor(
    private emailService: EmailService,
    private formBuilder: FormBuilder
  ) {
    this.contactForm = this.formBuilder.group({
      nameCB: ['', Validators.required],
      phoneCB: ['', [Validators.required,
      Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,5}$')]],
      emailCB: ['', [Validators.required, Validators.email]],
      messageCB: ['', Validators.required],
      subjectCB: ['']
  });
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    // this.fetchsocialLinks();
  }

  get f() { return this.contactForm.controls; }

  public fetchContactDetails() {
    this.contactInfo = contact;
  }

  public fetchHours() {
    this.hours = hours;
  }

  // public fetchsocialLinks() {
  //   this.socialLinks = socialLinks;
  // }

  onSubmit() {
    this.submitted = true;

   // stop here if form is invalid
   if (this.contactForm.invalid) {
       return;
   } else {

    if ( !this.contactForm.value.subjectCB) {
      this.contactForm.value.subjectCB = 'Website Form Submission';
    }


     this.receiveremail = this.contactInfo[2].data;

         this.completeMessage = `phone: ${this.contactForm.value.phoneCB}, <br/>
                                message: ${this.contactForm.value.messageCB}`;

         const body = {
           name: this.contactForm.value.nameCB,
           email: this.contactForm.value.emailCB,
           receiveremail: this.receiveremail,
           message: this.completeMessage,
           subject: this.contactForm.value.subjectCB,
         };
         this.emailService.sendEmail(body)
           .subscribe((response: any) => {
             if (response.result != null) {
              this.mailSent = true;
             } else {

             }
           }, (err) => {

           });
         this.submitted = false;
         // MailService(body);
        this.contactForm.reset();
   }
 }
}
