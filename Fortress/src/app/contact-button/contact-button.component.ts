import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';
import { contact, hours, socialLinks } from '../data/contact';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.scss']
})
export class ContactButtonComponent implements OnInit {

  hours: any;
  name: string;
  email: any;
  phone: any;
  message: string;
  subject: string;
  contactInfo: any;
  socialLinks: any;
  receiveremail: string;
  completeMessage: string;
  contactBtnForm: FormGroup;
  submitted = false;
  mailSent = false;

  constructor(
    private emailService: EmailService,
    private formBuilder: FormBuilder
  ) {
    this.contactBtnForm = this.formBuilder.group({
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
    this.fetchsocialLinks();
  }

  get f() { return this.contactBtnForm.controls; }

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
   if (this.contactBtnForm.invalid) {
       return;
   } else {
     this.receiveremail = this.contactInfo[1].data;

     this.completeMessage = `<strong>Phone: </strong> ${this.contactBtnForm.value.phone}, <br/>
                            <strong>Message: </strong> ${this.contactBtnForm.value.message}`;

         if (!this.contactBtnForm.value.subject) {
          this.contactBtnForm.value.subject = 'Website Contact Form';
         }

         const body = {
           name: this.contactBtnForm.value.name,
           email: this.contactBtnForm.value.email,
           receiveremail: this.receiveremail,
           message: this.completeMessage,
           subject: this.contactBtnForm.value.subject
         };
         this.emailService.sendEmail(body)
           .subscribe((response: any) => {
             if (response.result != null) {
              //  alert(response.message);
              this.mailSent = true;
             } else {
              //  alert(response.message);
             }
           }, (err) => {
             console.log('Error :', err);
           });
         this.submitted = false;
         this.mailSent = false;
         this.contactBtnForm.reset();
   }
 }
}
