import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navLinks } from '../data/nav';
import { contact } from '../data/contact';
import { UaParserService } from '../services/ua-parser.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navLinks: any;
  contactDetails: any;
  navbarCollapsed = true;
  imageBaseUrl: any;
  imagetype: any;

  constructor(
    private router: Router,
    private uaParserService: UaParserService,
  ) {
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    this.fetchNavigationLinks();
    this.fetchContactDetails();
  }

  public fetchContactDetails() {
    this.contactDetails = contact;
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

}
