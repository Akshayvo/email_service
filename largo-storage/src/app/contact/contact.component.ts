import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WINDOW } from '@ng-toolkit/universal';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../services/email.service';
import { contact, officeHours } from '../data/contact';

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
  subject: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private emailService: EmailService,
    private titleService: Title,
    private formBuilder: FormBuilder,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Do you have any questions about Security Storage's self storage units,
                warehouse space or office leases? Drop us a line through our contact
                form or via phone at (361) 275-9698!`
    });
    this.titleService.setTitle('Contact Us | Security Storage Cuero, Tx 77954');
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
    
  }

  get f() { return this.contactForm.controls; }


  public fetchContactDetails() {
    this.contactInfo = contact;
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
