import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { dataViewRates } from '../../data/view-rates';
import { viewRates } from '../../data/blurb';
import { UaParserService } from '../../services/ua-parser.service';
import { Subscription } from 'rxjs';
import { contactPageScript, script } from '../../data/script';
import { viewRatesPageTitle, viewRatesPageContent } from '../../data/title';
import { CanonicalService } from '../../services/canonical.service';
import { aboutUsAlt } from '../../data/home';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { contact } from '../../data/contact';


@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  viewRate: any;
  slideShow: any;
  viewRates: any;
  imageBaseUrl: any;
  imagetype: any;
  state:string;
  viewRatesHeading: string;
  viewRatesPageContent: string;
  viewRatesPageTitle: string;
  aboutUsAlt: string;

  
  rate: any;
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
  script: any;
  mailSent = false;
  loading = false;

  private isUnsubscribe$: Subscription;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private uaParserService: UaParserService,
    private canonical: CanonicalService,
    private emailService: EmailService,
    private formBuilder: FormBuilder,
  ) {
   this.state = script.state;
  //  this.fetchScript();
    this.fetchMetaData();
    // this.loadScript();
    this.meta.addTag({
      name: 'description',
      content: `${this.viewRatesPageContent}`
    });
    this.titleService.setTitle(`${this.viewRatesPageTitle}`);
    this.canonical.create();
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;

   
  
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchContactDetails();
    this.fetchViewRate();
    this.fetchViewRates();
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

  public fetchViewRate() {
    this.viewRate = dataViewRates;
    this.aboutUsAlt = aboutUsAlt;
  }

  public fetchContactDetails() {
    this.contactDetails = contact;
  }
 
  public fetchViewRates() {
    this.viewRates = viewRates;
  }
  public fetchMetaData () {
    this.viewRatesPageContent = viewRatesPageContent;
    this.viewRatesPageTitle = viewRatesPageTitle;
  }

  // public fetchScript() {
  //   this.script = contactPageScript;
  // }
  
  // public loadScript() {
  //   const node = document.createElement('script'); // creates the script tag
  //   node.type = 'application/ld+json'; // set the script type
  //   node.async = false; // makes script run asynchronously
  //   // node.charset = 'utf-8';
  //   node.innerHTML = JSON.stringify(this.script);
  //   // append to head of document
  //   document.getElementsByTagName('head')[0].appendChild(node);
  // }

  onSubmit() {
    // const today = new Date();
    // window['dataLayer'] = window['dataLayer'] || {};
    // window['dataLayer'] = window['dataLayer'] || [];
    // window['dataLayer'].push({
    //   'event': 'ContactFormsubmission',
    //   'date': today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
    //   'time': today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(),
    // });
  
  
    this.submitted = true;
  
   // stop here if form is invalid
   if (this.contactForm.invalid) {
       return;
   } else {
    if ( !this.contactForm.value.subject) {
      this.contactForm.value.subject = 'Website Form Submission';
    }
  
    const index = contact.findIndex(x => x.label === 'Email:');
    console.log('index', index)
    if (!!index) {
      this.receiveremail = this.contactDetails[index].data;
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
 
  public ngOnDestroy(): void {
    if (this.isUnsubscribe$ && this.isUnsubscribe$.closed) {
      this.isUnsubscribe$.unsubscribe();
    }
  }
}