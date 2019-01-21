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
        this.logo = '../../assets/images/movin-on-storage-center-logo.jpg';
    } else if (this.router.url.includes('/location/shaler-self')) {
      this.logo = '../../assets/images/shaler-self-storage-logo.jpg';
    } else  if (this.router.url.includes('/location/natrona-heights-self'))  {
        this.logo = '../../assets/images/natrona-heights-self-storage-logo.jpeg';
    } else {
      this.logo = '../../assets/images/pittsburgh-area-storage-centers-logo.jpg';
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
