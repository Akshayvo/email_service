import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navLinks } from '../data/nav';
import { contact,
  // socialLinks
 } from '../data/contact';


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

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.fetchNavigationLinks();
    // this.fetchSocialLinks();
    this.fetchContactDetails();
  }

  public fetchContactDetails() {
    this.contactDetails = contact;
  }

  // public fetchSocialLinks() {
  //   this.socialLinks = socialLinks;

  // }

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
