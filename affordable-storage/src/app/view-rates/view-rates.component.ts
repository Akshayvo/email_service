import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { dataViewRates, rate } from '../data/view-rates';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../services/email.service';
import { contact } from '../data/contact';


@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  currentActive: any = 'VIEW RATES';
  dataViewRates: any;
  rate: any;

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
    @Inject(WINDOW) private window: Window,
    private emailService: EmailService,
    private titleService: Title,
    private meta: Meta,
    private formBuilder: FormBuilder,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Check out the affordable rates on self storage units, and vehicle storage,
      then make a reservation with our easy-to-use form!`
    });
    this.titleService.setTitle('View Rates | Affordable Storage Solutions');

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
    window.scrollTo(0, 0);
    this.viewRates();
    this.fetchContactDetails();

  }

  get f() { return this.contactForm.controls; }


  public viewRates() {
    this.dataViewRates = dataViewRates;
    this.rate = rate;
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
