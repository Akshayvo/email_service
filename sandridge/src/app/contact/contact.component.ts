import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WINDOW } from '@ng-toolkit/universal';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import { contact, officeHours } from '../data/contact';
import { contactPageContent, contactPageTitle } from '../data/title';
import { contactHeading } from '../data/heading';
import { contactScript } from '../data/script';

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
  contactInfo: any;
  receiveremail: string;
  completeMessage: string;
  contactForm: FormGroup;
  submitted = false;
  mailSent = false;
  contactPageContent: string;
  contactPageTitle: string;
  contactHeading: string;
  script: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private emailService: EmailService,
    private titleService: Title,
    private formBuilder: FormBuilder,
    private meta: Meta
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.contactPageContent}`
    });
    this.titleService.setTitle(`${this.contactPageTitle}`);
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
    window.scrollTo(0, 0);
    this.fetchHours();
    this.fetchScript();
    this.loadScript();
  }

  get f() { return this.contactForm.controls; }


  public loadScript() {
    const node = document.createElement('script'); // creates the script tag
    node.type = 'application/ld+json'; // set the script type
    node.async = false; // makes script run asynchronously
    // node.charset = 'utf-8';
    node.innerHTML = JSON.stringify(this.script);
    // append to head of document
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  public fetchScript() {
    this.script = contactScript;
  }

  public fetchMetaData() {
    this.contactPageTitle = contactPageTitle;
    this.contactPageContent = contactPageContent;
  }


  public fetchContactDetails() {
    this.contactInfo = contact;
    this.contactHeading = contactHeading;
  }

  public fetchHours() {
    this.hours = officeHours;
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
           subject: this.contactForm.value.subject,
         };
         this.emailService.sendEmail(body)
           .subscribe((response: any) => {
             if (response.result != null) {
              this.mailSent = true;
             } else {
             }
           }, (err) => {
             console.log('Error :', err);
           });
         this.submitted = false;
         this.mailSent = false;
         this.contactForm.reset();
   }
 }

}
