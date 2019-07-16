import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { contact, socialLinks } from '../data/contact';
import { navLinks } from '../data/nav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  contactDetails: any;
  navLinks: any;
  socialLinks: any;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchNavigationLinks();
    this.fetchSocialLinks();
  }

  public fetchSocialLinks() {
    this.socialLinks = socialLinks;

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

  public onClick(menu: any) {
    menu.classList.remove('show');
  }
}
