import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navLinks } from '../data/nav';
import { headerInfo } from '../data/contact';
import { UaParserService } from '../services/ua-parser.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  contactDetails: any;
  navLinks: any;
  socialLinks: any;
data: any;
  logo: any;
  imgAlt: any;
  @Input() currentActive: any;
  locationId: any;
  imagetype: any;
  imageBaseUrl: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private uaParserService: UaParserService,
  ) { }

  ngOnInit() {
    this.fetchNavigationLinks();
    this.fetchContactDetails();
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
    // this.router.events.subscribe(path => {
    //   this.isSomePage();
    // });
  }

  // public isSomePage() {
  //   if (this.router.url.includes('/location/1321-north-jefferson-st-location')) {
  // tslint:disable-next-line: max-line-length
  //       this.logo = '';
  //       this.imgAlt = '';
  //   }
  // }

  public navigate (location: any) {
    this.router.navigate([location]);
  }

  public fetchNavigationLinks() {
    this.navLinks = navLinks;
  }

  public onClick(menu: any) {
    menu.classList.remove('show');
  }
  public fetchContactDetails() {
    this.contactDetails = headerInfo;
  }

}
