import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { navLinks } from '../data/nav';
import { contact, socialLinks } from '../data/contact';
import { UaParserService } from '../ua-parser.service';



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
  imagetype:any;
  imageBaseUrl:any;
  // browsername1 = this.browser.browsername;

  

  constructor(
    private router: Router,
    private uaParserService: UaParserService,
    // private browser: TestuaparserComponent
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

  // public fetch

  public navigate (location: any) {
    this.router.navigate([location]);
  }

  public onClick(menu: any) {
    menu.classList.remove('show');
  }

}
