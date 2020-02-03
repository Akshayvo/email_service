import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  data: any;
  logo: any;
  alt: any;
  @Input() currentActive: any;
  locationId: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.fetchNavigationLinks();
    this.router.events.subscribe(path => {
      this.isSomePage();
    });
  }

  public isSomePage() {
    if (this.router.url.includes('/dallas-secure-storage') || this.router.url.includes('/pay-rent-dallas')) {
        this.logo = 'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Dallas_Secure_Storage/dollas_txtlogo.gif';
        this.alt = 'Logo artwork that spells out Dallas Secure Storage with a lock';
    } else  if (this.router.url.includes( '/pay-rent-godsey' ) || this.router.url.includes( '/godsey-secure-storage')) {
        this.logo = 'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Dallas_Secure_Storage/godsey_logo1.gif';
        this.alt = 'Logo artwork that spells out Godsey Secure Storage with a lock';
    } else {
      this.logo = 'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Dallas_Secure_Storage/dollas_txtlogo.png';
      this.alt = 'logo artwork for two self storage facilities, each logo spells out the name of the facility';
    }
  }

  public navigate (location: any) {
    this.router.navigate([location]);
  }

  public fetchNavigationLinks() {
    this.navLinks = navLinks;
  }

  public onClick(menu: any) {
    menu.classList.remove('show');
  }

}
