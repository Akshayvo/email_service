import { WINDOW } from "@ng-toolkit/universal";
import { Component, OnInit, Inject } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { dataViewRates, rates, option, option1 } from "../data/view-rates";
import { contact, hours } from "../data/contact";
import { CanonicalService } from "../services/canonical.service";

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  AbstractControl,
  ValidatorFn,
  FormGroupName,
} from "@angular/forms";
import { EmailService } from "../services/email.service";
import { Subscription } from "rxjs";
import { DataSharingService } from "../api-bundle/services/data-sharing.service";

@Component({
  selector: "app-free-estimate",
  templateUrl: "./free-estimate.component.html",
  styleUrls: ["./free-estimate.component.scss"],
})
export class FreeEstimateComponent implements OnInit {
  currentActive: any = "VIEW RATES";
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
  currentdate: Date;
  currentDate: string;
  rates: any;
  option = [];
  option1 = [];
  options: any;
  private getLeadDaysSubscribe$: Subscription;

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private emailService: EmailService,
    private meta: Meta,
    private formBuilder: FormBuilder,
    private canonical: CanonicalService
  ) {
    this.meta.addTag({
      name: "description",
      content: `Check out our affordable recreational vehicle storage rates and start
                the reservation process right here! Have a question? Call (951) 603-5133!`,
    });
    this.canonical.create();
    this.titleService.setTitle("Rates | Robinson Storage Box");
    this.contactForm = this.formBuilder.group({
      name: ["", Validators.required],
      phone: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{3,5}$"
          ),
        ],
      ],
      email: ["", [Validators.required, Validators.email]],
      message: ["", Validators.required],
      subject: [""],
      AddressLine1: ["", Validators.required],
      AddressLine2: [""],
      City: ["", Validators.required],
      State: ["", Validators.required],
      ZIP: ["", Validators.required],
      dteMoveIn: [""],
    });
    function conditionalValidator(
      condition: () => boolean,
      validator: ValidatorFn
    ): ValidatorFn {
      return (control: AbstractControl): { [key: string]: any } => {
        if (condition()) {
          return null;
        }
        return validator(control);
      };
    }
  }

  ngOnInit() {
    this.fetchContactDetails();
    window.scrollTo(0, 0);
    this.viewRates();

    this.currentdate = new Date();

    this.fetchUSState();
  }

  public fetchUSState() {
    this.option = option;
    this.option1 = option1;
  }

  getError(form: { controls: any }) {
    return form.controls;
  }

  get f() {
    return this.contactForm.controls;
  }
  public fetchContactDetails() {
    this.contactInfo = contact;
  }

  public viewRates() {
    this.dataViewRates = dataViewRates;
    this.rates = rates;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    } else {
      if (!this.contactForm.value.subject) {
        this.contactForm.value.subject = "Website Form Submission";
      }

      this.receiveremail = this.contactInfo[1].data;
      

      this.completeMessage = `phone: ${this.contactForm.value.phone}, <br/>
                              message: ${this.contactForm.value.message} <br/>
                              address1:${this.contactForm.value.AddressLine1}<br/>
                              address2:${this.contactForm.value.AddressLine2}
                                `;

      const body = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        receiveremail: this.receiveremail,
        message: this.completeMessage,
        subject: this.contactForm.value.subject,
        // AddressLine1:this.contactForm.value.AddressLine1

      };
      this.emailService.sendEmail(body).subscribe(
        (response: any) => {
          if (response.result != null) {
            this.mailSent = true;
          } else {
          }
        },
        (err) => {}
      );
      this.submitted = false;
      // MailService(body);
      this.contactForm.reset();
    }
  }
}
