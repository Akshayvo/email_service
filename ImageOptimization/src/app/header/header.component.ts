import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navLinks } from '../data/nav';
import { contact, socialLinks } from '../data/contact';
import { TestuaparserComponent } from '../testuaparser/testuaparser.component';


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
  // browsername1 = TestuaparserComponent

  constructor(
    private router: Router,
    // private browser: TestuaparserComponent
  ) {
    // console.log(this.browsername1)
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

  // public fetch

  public navigate (location: any) {
    this.router.navigate([location]);
  }

  public onClick(menu: any) {
    menu.classList.remove('show');
  }

}
