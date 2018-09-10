import { Component, OnInit, Input } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { contact, socialLinks } from '../data/contact';
import { navLinks } from '../data/nav';

@Component({
  selector: "app-header", // Review Vinay: Use Single Quotes
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  contactDetails: any;
  navLinks: any;
  socialLinks: any;
  @Input("currentActive")
  currentActive;

  constructor(
    private route: ActivatedRoute, // Review Vinay: Remove Unused Variables
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchNavigationLinks();
    this.fetchSocialLinks();
  }

  public navigate(location) {
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
