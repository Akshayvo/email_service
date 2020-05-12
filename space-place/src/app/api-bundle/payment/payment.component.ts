import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { payment} from '../../data/payment';
import { contact } from '../../data/contact';
import { payRent } from '../../data/blurb';
import { CanonicalService } from '../../services/canonical.service';
import { loginDetail } from '../../data/pay-rent';
import { payRentHeading } from '../../data/heading';
import { payRentPageContent, payRentPageTitle } from '../../data/title';
import { UaParserService } from '../../services/ua-parser.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  payment: any;
  contact: any;
  payRent: any;
  loginDetail = [];
  payRentPageTitle: string;
  payRentPageContent: string;
  imageBaseUrl: any;
  imagetype: any;

  payRentHeading: string;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
    private uaParserService: UaParserService,
    ) {
      this.fetchLoginDetail();
      this.fetchContactDetails();
      this.canonical.create();
      this.fetchMetaData();

      this.meta.addTag({
        name: 'description',
        content: `${this.payRentPageContent}`
      });
      this.titleService.setTitle(`${this.payRentPageTitle}`);
      this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
      this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    this.fetchPayment();
    this.fetchContact();
    this.fetchPayRent();
    this.fetchPayRentHeading();
    window.scrollTo(0, 0);
  }

  public fetchPayRentHeading() {
    this.payRentHeading = payRentHeading;
  }


  public fetchLoginDetail() {
    this.loginDetail = loginDetail;
  }


  public fetchMetaData() {
    this.payRentPageTitle = payRentPageTitle;
    this.payRentPageContent = payRentPageContent;
  }



  public fetchContactDetails() {
    this.contact = contact;
  }

  public fetchPayment() {
    this.payment = payment;
  }

  public fetchContact() {
    this.contact = contact;
  }

  public fetchPayRent() {
    this.payRent = payRent;
  }

  public getImageUrl(imageName: string) {
    return `${this.imageBaseUrl}/${imageName}.${this.imagetype}`;
  }
}
