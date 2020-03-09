import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import {
  contact,
  contacts260NGrove,
  contacts201Grove,
  contacts246WSouthLane,
  contacts817SGetty,
  contacts430SHwy83,
  contacts500EastGardenStreet,
  hours,
  hours260NGrove,
  hours201Grove,
  hours246WSouthLane,
  hours817SGetty,
  hours430SHwy83,
  hours500EastGardenStreet,
  contacts2633EastMainStreet,
  hours2633EastMainStreet,
} from '../data/contact';
import { WINDOW } from '@ng-toolkit/universal';
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  places = [
    {
      id: 0,
      name: 'AFFORDABLE STORAGE #1 - 260 N GROVE',
    },
    {
      id: 1,
      name: 'AFFORDABLE STORAGE #2 - 201 N GROVE',
    },
    {
      id: 2,
      name: 'AFFORDABLE STORAGE #3 - 246 W. SOUTH LANE',
    },
    {
      id: 3,
      name: 'AFFORDABLE STORAGE #4 - 817 S. GETTY',
    },
    {
      id: 4,
      name: 'AFFORDABLE STORAGE #5 - 430 S HWY 83',
    },
    {
      id: 5,
      name: 'AFFORDABLE STORAGE #6 - 500 E. GARDEN',
    },
    {
      id: 6,
      name: 'AFFORDABLE STORAGE #7 - 2633 E. MAIN ST',
    },
 ];

  contacts201Grove: any;
  contacts260NGrove: any;
  contacts500EastGardenStreet: any;
  contacts817SGetty: any;
  contacts246WSouthLane: any;
  contacts430SHwy83: any;
  hours260NGrove: any;
  hours201Grove: any;
  hours246WSouthLane: any;
  hours430SHwy83: any;
  hours2633EastMainStreet: any;
  contacts2633EastMainStreet: any;
  hours500EastGardenStreet: any;
  hours817SGetty: any;
  placeName: string;
  name: string;
  email: any;
  phone: any;
  subject: string;
  location: any;
  message: string;
  receiveremail: string;
  contact: any;
  hours: any;
  completeMessage: string;


  contactForm: FormGroup;
  submitted = false;
  mailSent = false;
  private sub: any;


  constructor(
    @Inject(WINDOW) private window: Window,
    private emailService: EmailService,
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
    private formBuilder: FormBuilder
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Do you have a question about your account, or our self storage, boat and
      recreational vehicle storage? Use our contact form, or call us today!`
    });
    this.titleService.setTitle('Contact Us  | Affordable Storage');

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required,
                Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,5}$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      location: ['', Validators.required],
      subject: ['']
  });
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.placeName = params['name'];
    });

    this.fetchContactDetails();
    this.fetchHours();
    window.scrollTo(0, 0);
  }

  get f() { return this.contactForm.controls; }

  public fetchContactDetails() {
    this.contact = contact;
    this.contacts246WSouthLane = contacts246WSouthLane;
    this.contacts260NGrove = contacts260NGrove;
    this.contacts201Grove = contacts201Grove;
    this.contacts817SGetty = contacts817SGetty;
    this.contacts500EastGardenStreet = contacts500EastGardenStreet;
    this.contacts430SHwy83 = contacts430SHwy83;
    this.contacts2633EastMainStreet = contacts2633EastMainStreet;
  }

  public fetchHours() {
    this.hours = hours;
    this.hours201Grove = hours201Grove;
    this.hours260NGrove = hours260NGrove;
    this.hours246WSouthLane = hours246WSouthLane;
    this.hours430SHwy83 = hours430SHwy83;
    this.hours817SGetty = hours817SGetty;
    this.hours500EastGardenStreet = hours500EastGardenStreet;
    this.hours2633EastMainStreet = hours2633EastMainStreet;
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

   if (this.contactForm.value.location === 'AFFORDABLE STORAGE #1 - 260 N GROVE') {
    this.receiveremail = this.contacts260NGrove[2].data;
  } else if (this.contactForm.value.location === 'AFFORDABLE STORAGE #2 - 201 N GROVE') {
    this.receiveremail = this.contacts201Grove[2].data;
  } else if (this.contactForm.value.location === 'AFFORDABLE STORAGE #3 - 246 W. SOUTH LANE') {
    this.receiveremail = this.contacts246WSouthLane[2].data;
  } else if (this.contactForm.value.location === 'AFFORDABLE STORAGE #4 - 817 S. GETTY') {
    this.receiveremail = this.contacts817SGetty[2].data;
  } else if (this.contactForm.value.location === 'AFFORDABLE STORAGE #5 - 430 S HWY 83') {
    this.receiveremail = this.contacts430SHwy83[2].data;
  } else if (this.contactForm.value.location === 'AFFORDABLE STORAGE #6 - 500 E. GARDEN') {
    this.receiveremail = this.contacts500EastGardenStreet[2].data;
  } else if (this.contactForm.value.location === 'AFFORDABLE STORAGE #7 - 2633 E. MAIN ST') {
    this.receiveremail = this.contacts2633EastMainStreet[2].data;
  }
  this.completeMessage = `<strong>Phone:</strong> ${this.contactForm.value.phone}, <br/>
                          <strong>Message:</strong> ${this.contactForm.value.message}`;

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
           console.log('Error :', err);
         });
       this.submitted = false;
       this.mailSent = false;
       this.contactForm.reset();
    }
  }
}
