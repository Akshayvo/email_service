import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { contact } from '../../data/contact';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../services/data-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  contact: any;

  constructor(
    private titleService: Title,
    public router: Router,
    private  dataSharingService: DataSharingService,

    @Inject(WINDOW) private window: Window,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Small businesses don't always operate on normal business hours, that's why we offer 24 hour access to your account!`
    });
    this.titleService.setTitle('Pay Rent | State Storage Workshops');
  }

  ngOnInit() {
    this.fetchContactDetails();
    window.scrollTo(0, 0);
  }

  public fetchContactDetails() {
    this.contact = contact;
  }
}
