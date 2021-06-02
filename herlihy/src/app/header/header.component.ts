import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navLinks } from '../data/nav';
import { contact, socialLinks } from '../data/contact';
import { UaParserService } from '../services/ua-parser.service';
import { environment } from '../../environments/environment';
import { time } from 'console';
import { ViewRatesPageComponent } from '../api-bundle/view-rates-page/view-rates-page.component';
import { Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  contactDetails: any;
  navLinks: any;
  socialLinks: any;
  navbarCollapsed = true;
  imagetype: any;
  imageBaseUrl: any;
  scroll: any;
  paymentTab: string;

  constructor(
    private router: Router,
    private uaParserService: UaParserService,
  ) {
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    this.fetchNavigationLinks();
    this.fetchSocialLinks();
    this.fetchContactDetails();
  }

  public fetchContactDetails() {
    this.contactDetails = contact;
  }

  public fetchSocialLinks() {
    this.socialLinks = socialLinks;

  }

  public fetchNavigationLinks() {
    this.navLinks = navLinks;
  }

  public navigate (location: any) {
    this.router.navigate([location]);
  }

  public onClick(menu: any) {
    menu.classList.remove('show');
  }

  

  public payrent(){
    // this.router.navigate([`${environment.locationName}/view-rates`,{scroll: true}])
    if (!!localStorage.getItem('paymentTab')) {
      this.paymentTab = localStorage.getItem('paymentTab');
    }
    this.router.navigate([`/pay-rent/${this.paymentTab}/login`]);
  }

}
