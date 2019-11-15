import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { contact, hours } from '../data/contact';
import { EmailService } from '../services/email.service';
import { contactUs } from '../data/blurb';
import { CanonicalService } from '../services/canonical.service';


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
    private canonical: CanonicalService,
    ) {
      this.canonical.create();
      this.meta.addTag({
        name: 'description',
        content: `Do you have a question about our self storage or vehicle storage solutions?
        Use our helpful contact form or call (479) 202-3911 today!`
      });
      this.titleService.setTitle('Contact Us | Hwy 412 Mini Storage');

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
    this.fetchContactUs();
    this.fetchHours();
    window.scrollTo (0, 0);
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
                 this.contactForm.reset();
             } else {
             }
           }, (err) => {
           });
         this.submitted = false;
         // MailService(body);
         this.mailSent = false;
         
   }
 }
}
