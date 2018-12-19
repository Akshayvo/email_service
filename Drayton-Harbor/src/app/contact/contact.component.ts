import { Component, OnInit, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';
// import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import { contact, hours } from '../data/contact';

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
  registerForm: FormGroup;
  submitted = false;




  constructor(
    @Inject(WINDOW) private window: Window,
    private emailService: EmailService,
    private titleService: Title,
    private meta: Meta,
    private formBuilder: FormBuilder
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Have a question or concern about our self storage, RV, boat or vehicle services?
                Use our convenient contact form or contact information to reach out today!`
    });
    this.titleService.setTitle('Affordable Self Storage Units Near Blaine, WA, 98230 | Drayton Harbor Mini Storage');
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    this.window.scrollTo(0, 0);
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('0-9')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
  });
  }

  get f() { return this.registerForm.controls; }
  public fetchContactDetails() {
    this.contactInfo = contact;
  }

  public fetchHours() {
    this.hours = hours;
  }

  onSubmit() {
     this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    } else {
      console.log(this.registerForm.value);
      this.receiveremail = this.contactInfo[1].data;

          this.completeMessage = `phone: ${this.registerForm.value.phone}, <br/>
                                 message: ${this.registerForm.value.message}`;

          const body = {
            name: this.registerForm.value.name,
            email: this.registerForm.value.email,
            receiveremail: this.receiveremail,
            message: this.completeMessage,
          };
          console.log(body);
          this.emailService.sendEmail(body)
            .subscribe((response: any) => {
              // console.log('Authentication response:', response);
              if (response.result != null) {
                alert(response.message);
              } else {
                // console.log(`response`, response.result);
                alert(response.message);
              }
            }, (err) => {
              console.log('Error :', err);
            });
          this.submitted = false;
          // MailService(body);
          this.registerForm.reset();
    }
  }
}
