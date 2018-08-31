import { Component, OnInit, Input } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { contact, socialLinks } from '../Data/contact';
import { navLinks } from '../Data/nav';

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
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchNavigationLinks();
    this.fetchSocialLinks();
  }

  public navigate (location) {
    this.router.navigate([location]);
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

}
