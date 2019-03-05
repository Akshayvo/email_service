import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { contact, hours } from '../data/contact';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  hours: any;
  name: string;
  email: any;
  phone: any;
  message: string;
  subject: string;
  contactInfo: any;
  receiveremail: string;
  completeMessage: string;
  contactForm: FormGroup;
  submitted = false;
  mailSent = false;


  constructor(
    @Inject(WINDOW) private window: Window,
    private emailService: EmailService,
    private titleService: Title,
    private formBuilder: FormBuilder,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Have a question about our self storage units or RV parking spaces?
                Use our convenient contact form or the contact information here to
                speak with one of our friendly and knowledgeable managers!`
    });
    this.titleService.setTitle('Contact Us | Fortress Mini Storage');
  }

  ngOnInit() {
    this.fetchContactDetails();
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
    this.contactInfo = contact;
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
      } else {
      }
    }, (err) => {
    });
  this.submitted = false;
  // MailService(body);
  this.mailSent = false;
  this.contactForm.reset();
   }
 }
}
