import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRate, } from '../data/view';
import { viewRates } from '../data/blurb';
import { WINDOW } from '@ng-toolkit/universal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { contact, hours } from '../data/contact';
import { EmailService } from '../services/email.service';
import { contactUs } from '../data/blurb';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  viewRate: any;
  slideShow: any;
  viewRates: any;
  currentActive: any = 'VIEW RATES';

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
  contactUs: any;
  mailSent = false;
  loading = false;

  constructor(
    private emailService: EmailService,
    private titleService: Title,
    private meta: Meta,
    private formBuilder: FormBuilder,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Check our portable storage unit availability and pricing.
      Make your reservation with a few clicks and start saving time today!`
    });
    this.titleService.setTitle('View Rates | Storage World Mobile');


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
    this.fetchViewRate();
    this.fetchViewRates();
    window.scrollTo(0, 0);
  }

  get f() { return this.contactForm.controls; }


  public fetchViewRate() {
    this.viewRate = viewRate;
  }

  public fetchViewRates() {
    this.viewRates = viewRates;
  }

  public fetchContactDetails() {
    this.contactDetails = contact;
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

   // stop here if form is
   if (this.contactForm.invalid) {
    this.loading = false;
       return;
   } else {
     this.receiveremail = this.contactDetails[1].data;

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
              this.loading = false;
              this.contactForm.reset();
             } else {
              this.loading = false;
             }
           }, (err) => {
            this.loading = false;
           });
         this.submitted = false;
         this.mailSent = false;
   }
 }
}

