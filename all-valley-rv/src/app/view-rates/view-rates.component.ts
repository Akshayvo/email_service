import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { dataViewRates } from '../data/view-rates';
import { contact, hours } from '../data/contact';
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  currentActive: any = 'VIEW RATES';
  dataViewRates: any;
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

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private emailService: EmailService,
    private meta: Meta,
    private formBuilder: FormBuilder
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Check out our affordable recreational vehicle storage rates and start
                the reservation process right here! Have a question? Call (951) 603-5133!`
    });
    this.titleService.setTitle('View Rates  | All Valley RV Storage');
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
    window.scrollTo(0, 0);
    this.viewRates();
  }

  get f() { return this.contactForm.controls; }
  public fetchContactDetails() {
    this.contactInfo = contact;
  }

  public viewRates() {
    this.dataViewRates = dataViewRates;
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
