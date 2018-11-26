import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { contact } from '../data/contact';
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
  @Input('currentActive') currentActive;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchNavigationLinks();
  }

  public navigate (location) {
    this.router.navigate([location]);
  }

  public fetchContactDetails() {
    this.contactDetails = contact;
  }

  public fetchNavigationLinks() {
    this.navLinks = navLinks;
  }

}
