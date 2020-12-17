import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { serviceCenterHeading } from '../data/heading';
import { serviceCenterInfoHeading, serviceCenter, vehicleServiceHeading, vehicleService } from '../data/serviceCenter';
import { serviceCenterPageContent, serviceCenterPageTitle } from '../data/title';
import { CanonicalService } from '../services/canonical.service';
import { contact, hours } from '../data/contact';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../services/email.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-service-center',
  templateUrl: './service-center.component.html',
  styleUrls: ['./service-center.component.scss']
})
export class ServiceCenterComponent implements OnInit {

  serviceCenterHeading: string;
  serviceCenterPageTitle: string;
  serviceCenterPageContent: string;
  serviceCenterInfoHeading: string;
  serviceCenter: any;
  vehicleServiceHeading: any;
  vehicleService: any;
  contact: any;
  hours: any;
  receiveremail: string;
  completeMessage: string;
  mailSent = false;
  submitted = false;
  contactForm: FormGroup;

  constructor(
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
    private formBuilder: FormBuilder,
    private emailService: EmailService,

  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.serviceCenterPageContent}`
    });
    this.titleService.setTitle(`${this.serviceCenterPageTitle}`);
    this.canonical.create();
   }

  ngOnInit() {
    this.fetchServiceCenterHeaing();
    this.fetchServiceCenter();
    this.fetchContact();
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
  public fetchServiceCenterHeaing() {
    this.serviceCenterHeading = serviceCenterHeading;
  }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  public fetchMetaData () {
    this.serviceCenterPageContent = serviceCenterPageContent;
    this.serviceCenterPageTitle = serviceCenterPageTitle;
  }

  public fetchServiceCenter () {
    this.serviceCenterInfoHeading = serviceCenterInfoHeading;
    this.serviceCenter = serviceCenter;
    this.vehicleServiceHeading = vehicleServiceHeading;
    this.vehicleService = vehicleService;
  }

  public fetchContact() {
    this.contact = contact;
  }

  public fetchHours() {
    this.hours = hours;
  }
  onSubmit() {
    const today = new Date();
    window['dataLayer'] = window['dataLayer'] || {};
    window['dataLayer'] = window['dataLayer'] || [];
    window['dataLayer'].push({
      'event': 'ContactFormsubmission',
      'date': today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
      'time': today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(),
    });


    this.submitted = true;

   // stop here if form is invalid
   if (this.contactForm.invalid) {
       return;
   } else {
    if ( !this.contactForm.value.subject) {
      this.contactForm.value.subject = 'Website Form Submission';
    }

    const index = contact.findIndex(x => x.label === 'Email:');

    if (!!index) {
      this.receiveremail = this.contact[index].email;
    }

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
         this.contactForm.reset();
   }
 }
}



