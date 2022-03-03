import { Component, OnInit, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';
import { Router } from "@angular/router";
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import { contact, hours } from '../data/contact';
import { MetaService } from "../services/link.service";
import { contactPageTitle, contactPageContent } from "../data/title";
import { contactHeading } from "../data/heading";
import { CanonicalService } from "../services/canonical.service";
import {
  contactPageScript,
  ogContactPage,
  twitterContactPage,
} from "../data/script";



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
  contactPageTitle: string;
  contactPageContent: string;
  contactHeading: string;
  og: any;
  twitter: any;
  script: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private emailService: EmailService,
    private titleService: Title,
    private meta: Meta,
    private formBuilder: FormBuilder,
    private router: Router,
    private canonical: CanonicalService
  ) {
    this.fetchScript();
    this.loadScript();
    this.fetchOg();
    this.fetchTwitter();
    this.og.forEach((element) => {
      this.meta.updateTag({
        property: element.property,
        content: element.content,
      });
    });

    this.twitter.forEach((element) => {
      this.meta.updateTag({
        name: element.name,
        content: element.content,
      });
    });
    this.fetchMetaData();
    this.meta.updateTag({
      name: 'description',
      content: `${this.contactPageContent}`
    });
    this.titleService.setTitle(`${this.contactPageTitle}`);
    this.canonical.create();

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
    window.scrollTo(0, 0);
  }

  get f() { return this.contactForm.controls; }

  public fetchOg() {
    this.og = ogContactPage;
  }

  public fetchScript() {
    this.script = contactPageScript;
  }

  public loadScript() {
    const node = document.createElement("script"); // creates the script tag
    node.type = "application/ld+json"; // set the script type
    node.async = false; // makes script run asynchronously
    // node.charset = 'utf-8';
    node.innerHTML = JSON.stringify(this.script);
    // append to head of document
    document.getElementsByTagName("head")[0].appendChild(node);
  }

  public fetchTwitter() {
    this.twitter = twitterContactPage;
  }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  public fetchMetaData() {
    this.contactPageTitle = contactPageTitle;
    this.contactPageContent = contactPageContent;
  }

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

      if ( !this.contactForm.value.subject) {
        this.contactForm.value.subject = 'Website Form Submission';
      }

      this.receiveremail = this.contactInfo[3].data;

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
                this.contactForm.reset();
              } else {
              }
            }, (err) => {

            });
          this.submitted = false;
          // MailService(body);
    }
  }
}
