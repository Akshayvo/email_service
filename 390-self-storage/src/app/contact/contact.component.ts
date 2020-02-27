import { Component, OnInit, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import { contact, hours } from '../data/contact';
import { contactScript } from '../data/script';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // form: FormGroup;
  currentActive: any = 'CONTACT US';
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
  mailSent = false;
  subject: string;
  script: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private emailService: EmailService,
    private titleService: Title,
    private meta: Meta,
    private formBuilder: FormBuilder
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Are you looking for affordable units and service with a smile?
      We are a self storage company in Rochester NY. Contact 390 Self Storage for awesome services!`
    });
    this.titleService.setTitle('Self Storage Company Rochester NY, Secure Storage, Gates NY');

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required,
      Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,5}$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      subject: ['']
  });
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    this.fetchScript();
    window.scrollTo(0, 0);
  }

  get f() { return this.contactForm.controls; }
  public fetchContactDetails() {
    this.contactInfo = contact;
  }

  public fetchScript() {
    this.script = contactScript;
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

      this.receiveremail = this.contactInfo[1].data;

          this.completeMessage = `phone: ${this.contactForm.value.phone}, <br/>
                                 message: ${this.contactForm.value.message}`;

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
          this.contactForm.reset();
    }
  }
}
