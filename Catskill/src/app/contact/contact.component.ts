import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';
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
  submitted = false;
  isSubmitted = false;
  head: any;

  constructor(
    private router: Router,
    private emailService: EmailService,
    private titleService: Title,
    private meta: Meta,
    private formBuilder: FormBuilder
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Our friendly and knowledgeable staff are ready and willing to answer all of your self storage
                and U-Haul truck rental questions! Simply call or drop us a line!`
    });
    this.titleService.setTitle('Contact Catskill Self Storage | Catskill Self Storage, Catskill, NY, 12414');
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      subject: [''],
  });
  }

  get f() { return this.contactForm.controls; }
  public navigate(location) {
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
     console.log(this.contactForm.value);
     this.isSubmitted = true;

     if ( !this.contactForm.value.subject) {
      this.contactForm.value.subject = 'Website Form Submission';
    }
     this.receiveremail = this.contactDetails[1].data;

         this.completeMessage = `message: ${this.contactForm.value.message}`;

         const body = {
           name: this.contactForm.value.name,
           email: this.contactForm.value.email,
           receiveremail: this.receiveremail,
           message: this.completeMessage,
           subject: this.contactForm.value.subject,
         };
         console.log(body);
         this.emailService.sendEmail(body)
           .subscribe((response: any) => {
             if (response.result != null) {
              // alert(response.message);
             } else {
              //  alert(response.message);
             }
           }, (err) => {
             // console.log('Error :', err);
           });
         this.submitted = false;
         // MailService(body);
         this.contactForm.reset();
   }
 }
}


