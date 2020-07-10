import { Component, OnInit } from '@angular/core';
import { contactsLocation1 } from '../../data/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.scss']
})
export class MakePaymentComponent implements OnInit {

  contact: any;
  name: string;
  id: number;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.fetchContactDetail();
  }

  public fetchContactDetail() {
    if (this.router.url.includes('affordable-secure-storage-floral-city')) {
      this.id = 1;
      this.name = 'Affordable Secure Storage - Floral City, LLC';
      this.contact = contactsLocation1;
    }
  }

}
