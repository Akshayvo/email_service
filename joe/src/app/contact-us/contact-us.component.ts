import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { contact, hours } from '../data/contact';
import { EmailService } from '../services/email.service';
import { contactUs } from '../data/blurb';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactDetails: any;
  hours: any;
  name: string;
  email: any;
  phone: any;
  subject: string;
  message: string;
  receiveremail: string;
  completeMessage: string;
  contactForm: FormGroup;
  submitted = false;
  isSubmitted = false;
  contactUs: any;
  mailSent = false;

  constructor(
    @Inject(WINDOW) private window: Window,
    private emailService: EmailService,
    private titleService: Title,
    private meta: Meta,
    private formBuilder: FormBuilder,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Are you looking to reserve a unit or have questions about our services?
      Need to update your account information? Use the contact information here!`
    });
    this.titleService.setTitle('Contact Us | St. Joe Self Storage');
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchContactUs();
    this.fetchHours();
    this.window.scrollTo(0, 0);
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required,
              Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,5}$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      subject: [''],
  });
  }

  get f() { return this.contactForm.controls; }

  public fetchContactDetails() {
    this.contactDetails = contact;
  }

  public fetchHours() {
    this.hours = hours;
  }

  public fetchContactUs() {
    this.contactUs = contactUs;
  }

  onSubmit() {
    this.submitted = true;

   // stop here if form is
   if (this.contactForm.invalid) {
       return;
   } else {
    if ( !this.contactForm.value.subject) {
      this.contactForm.value.subject = 'Website Form Submission';
    }
     this.receiveremail = this.contactDetails[1].data;

     this.completeMessage = `<strong>Phone: </strong> ${this.contactForm.value.phone}, <br/>
     <strong>Message: </strong> ${this.contactForm.value.message}`;

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
         // MailService(body);
         this.contactForm.reset();
   }
 }
}
