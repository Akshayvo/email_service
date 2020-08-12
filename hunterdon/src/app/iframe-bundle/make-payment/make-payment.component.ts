import { Component, OnInit } from '@angular/core';
import { contactsLocation3, contactsLocation1, contactsLocation2 } from '../../data/contact';
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
    if (this.router.url.includes('hunterdon-storage-ringoes')) {
      this.id = 0;
      this.name = 'Hunterdon Storage At Ringoes';
      this.contact = contactsLocation1;
    } else  if (this.router.url.includes('hunterdon-storage-1')) {
      this.id = 1;
      this.name = 'Hunterdon Storage I';
      this.contact = contactsLocation2;
    } else  if (this.router.url.includes('hunterdon-storage-2')) {
      this.id = 2;
      this.name = 'Hunterdon Storage II';
      this.contact = contactsLocation3;
    }
  }

}
