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
    if (this.router.url.includes('/location/dallas-secure-storage')) {
        this.logo = '../../assets/dollas_txtlogo.gif';
    } else  if (this.router.url.includes('/location/godsey-secure-storage'))  {
        this.logo = '../../assets/dollas_txtlogo.gif';
    } else {
      this.logo = '../../assets/dollas_txtlogo.gif';
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
