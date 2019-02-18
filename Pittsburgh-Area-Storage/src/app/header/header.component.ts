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
    if (this.router.url.includes('/location/movin-on-storage')) {
        this.logo = 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Pittsburgh_Images/movin-on-logo.png';
    } else if (this.router.url.includes('/location/shaler-self')) {
      this.logo = 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Pittsburgh_Images/shaler-logo.png';
    } else  if (this.router.url.includes('/location/natrona-heights-self'))  {
        this.logo = 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Pittsburgh_Images/natrona-logo.png';
    } else {
      this.logo = 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Pittsburgh_Images/pittsburgh-area-storage-centers-logo.jpg';
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
