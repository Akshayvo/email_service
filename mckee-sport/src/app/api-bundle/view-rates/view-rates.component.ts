import { Component, OnInit, OnDestroy, ViewChild  } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { viewRates, altText } from '../../data/view-rates';
import { MetaService } from '../../services/link.service';
import { FetchDataService } from '../services/fetch-data.service';
import { UnitTypes, LstUnitTypes } from '../models/unittypes';
import { UaParserService } from '../../services/ua-parser.service';
import { viewRatesPageContent, viewRatesPageTitle } from '../../data/title';
import { viewRatesHeading } from '../../data/heading';
import { Subscription } from 'rxjs';
import { contact } from '../../data/contact';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit, OnDestroy {

  viewRates: any;
  showTable = false;
  unitTypes: UnitTypes;
  LstUnitTypes: LstUnitTypes[];
  DescriptionVR: string;
  MonthlyRateVR: number;
  viewRatesPageContent: string;
  viewRatesPageTitle: string;
  openComponent = false;
  imagetype: any;
  viewRatesHeading: string;
  imageBaseUrl: any;
  altText: string;
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
  contactPageContent: any;

 private isUnsubscribe$: Subscription;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private metaService: MetaService,
    private fetchDataService: FetchDataService,
    private uaParserService: UaParserService,
    private emailService: EmailService,
    private formBuilder: FormBuilder
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.viewRatesPageContent}`
    });
    this.titleService.setTitle(`${this.viewRatesPageTitle}`);
    this.metaService.createCanonicalURL();
    this.metaService.createCanonicalURL();
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;

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
    window.scrollTo(0, 0);
    this.fetchViewRates();
    // this.getData();
    this.fetchHeading();
    this.fetchContactDetails();
  }

  get f() { return this.contactForm.controls; }

  public fetchContactDetails() {
    this.contactInfo = contact;
  }

  public fetchHeading() {
    this.viewRatesHeading = viewRatesHeading;
  }

  public fetchViewRates() {
    this.viewRates = viewRates;
    this.altText = altText;
  }

  public fetchMetaData () {
    this.viewRatesPageContent = viewRatesPageContent;
    this.viewRatesPageTitle = viewRatesPageTitle;
  }

  handleClick(event: Event, event1: Event) {
    this.openComponent = true;
    this.DescriptionVR = JSON.parse(JSON.stringify(event));
    this.MonthlyRateVR = parseFloat(JSON.stringify(event1));

  }

  getData() {
  this.isUnsubscribe$ = this.fetchDataService.getData()
    .subscribe(unitTypesResponse => {
      this.showTable =  true;
      this.LstUnitTypes = unitTypesResponse.lstUnitTypes;
    });
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

     this.receiveremail = this.contactInfo[2].data;

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

 public ngOnDestroy(): void {
  if (this.isUnsubscribe$ && this.isUnsubscribe$.closed) {
    this.isUnsubscribe$.unsubscribe();
  }
}

}

