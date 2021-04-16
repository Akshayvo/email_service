import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { contact, socialLinks } from '../data/contact';
import { navLinks } from '../data/nav';
import { UaParserService } from '../../app/services/ua-parser.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  contactDetails: any;
  navLinks: any;
  socialLinks: any;
  imagetype: any;
  imageBaseUrl: any;

  constructor(
    private router: Router,
    private uaParserService: UaParserService,
  ) {
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
   }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchNavigationLinks();
    this.fetchSocialLinks();
  }

  public navigate (location: any) {
    this.router.navigate([location]);
  }

  public fetchContactDetails() {
    this.contactDetails = contact;
  }

  public fetchNavigationLinks() {
    this.navLinks = navLinks;
  }

  public fetchSocialLinks() {
    this.socialLinks = socialLinks;

  }
  public onClick(menu: any) {
    menu.classList.remove('show');
  }
}