import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navLinks } from '../data/nav';
import { contact, socialLinks } from '../data/contact';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navLinks: any;
  navbarCollapsed = true;
  contactDetails: any;
  socialLinks: any;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.fetchNavigationLinks();
    this.fetchContactDetails();
    this.fetchSocialLinks();
  }

  public fetchNavigationLinks() {
    this.navLinks = navLinks;
  }

  public fetchSocialLinks() {
    this.socialLinks = socialLinks;

  }

  public fetchContactDetails() {
    this.contactDetails = contact;
  }

  public navigate (location: any) {
    this.router.navigate([location]);
  }

  public onClick(menu: any) {
    menu.classList.remove('show');
  }

}
