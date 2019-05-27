import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { contact, hours } from '../data/contact';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  currentActive: any = 'CONTACT US';
  contactDetails: any;
  hours: any;
  name: string;
  email: any;
  message: string;
  contactInfo: any;
  receiveremail: string;
  completeMessage: string;
  contactForm: FormGroup;
  subject: string;
  submitted = false;
  mailSent = false;
  head: any;
  phone: any;

  constructor(
    private router: Router,
    private emailService: EmailService,
    private titleService: Title,
    private meta: Meta,
    private formBuilder: FormBuilder,

  ) {
    this.meta.addTag({
      name: 'description',
      content: `Do you have questions about our self storage units or parking spaces? Use
      our contact form or the contact information here!`
    });
    this.titleService.setTitle('Contact Us | Affordable Storage Solutions');
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required,
      Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,5}$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      subject: ['']
  });
  }

  get f() { return this.contactForm.controls; }
  public navigate(location: any) {
    this.router.navigate([location]);
  }

  public fetchContactDetails() {
    this.contactDetails = contact;
  }

  public fetchHours() {
    this.hours = hours;
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

     this.receiveremail = this.contactDetails[1].data;

     this.completeMessage = `phone: ${this.contactForm.value.phone}, <br/>
     message: ${this.contactForm.value.message}`;

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
           });
         this.submitted = false;
         this.mailSent = false;
         // MailService(body);
         this.contactForm.reset();
   }
 }
}
