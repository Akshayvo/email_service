import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { contact, hours, accesshours } from '../../data/contact';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {

  contactForm: FormGroup;
  contactDetails: any;
  hours: any;
  accesshours: any;
  submitted = false;
  receiveremail: string;
  completeMessage: string;
  mailSent = false;
  fullName: string;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private emailService: EmailService,

  ) { }
  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
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
    this.accesshours = accesshours;
  }


  onSubmit() {

    this.submitted = true;

   // stop here if form is invalid
   if (this.contactForm.invalid) {
       return;
   } else {
    if ( !this.contactForm.value.subject) {
      this.contactForm.value.subject = 'Website Reservation Request';
    }

    const index = contact.findIndex(x => x.label === 'Email:');
    this.receiveremail = this.contactDetails[index].data;

     this.completeMessage = `phone: ${this.contactForm.value.phone}, <br/>
     message: ${this.contactForm.value.message}`;

     this.fullName = `${this.contactForm.value.firstName} ${this.contactForm.value.lastName}`;

         const body = {
          name: this.fullName,
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


