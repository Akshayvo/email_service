import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { contact, hours } from '../data/contact';

@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.scss']
})
export class ContactButtonComponent implements OnInit {

  // form: FormGroup;
  hours: any;
  name: string;
  email: any;
  phone: any;
  message: string;
  contactInfo: any;
  receiveremail: string;
  completeMessage: string;
  contactForm: FormGroup;
  submitted = false;
  subject: string;
  socialLink: any;
  mailSent = false;

  constructor(
    private emailService: EmailService,
    private formBuilder: FormBuilder,
  ) {
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
    this.fetchContactDetails();
    this.fetchHours();
  }

  get f() { return this.contactForm.controls; }

  public fetchContactDetails() {
    this.contactInfo = contact;
  }

  public fetchHours() {
    this.hours = hours;
  }




  onSubmit() {
    this.submitted = true;

   // stop here if form is
   if (this.contactForm.invalid) {
       return;
   } else {

     this.receiveremail = this.contactInfo[1].data;

         this.completeMessage = `<strong>Phone: </strong> ${this.contactForm.value.phone}, <br/>
                                <strong>Message: </strong> ${this.contactForm.value.message}`;

         if (!this.contactForm.value.subject) {
          this.contactForm.value.subject = 'Website Contact Form';
         }

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

           });
         this.submitted = false;
         this.mailSent = false;
         
   }
 }
}
