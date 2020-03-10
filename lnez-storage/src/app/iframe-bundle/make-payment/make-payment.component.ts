import { Component, OnInit } from '@angular/core';
import { contactsLocation3, contactsLocation1 } from '../../data/contact';
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
    if (this.router.url.includes('inez-storage')) {
      this.id = 1;
      this.name = 'Inez Storage';
      this.contact = contactsLocation1;
    } else  if (this.router.url.includes('beck-road-storage')) {
      this.id = 2;
      this.name = 'Beck Road Storage';
      this.contact = contactsLocation3;
    }
  }

}
