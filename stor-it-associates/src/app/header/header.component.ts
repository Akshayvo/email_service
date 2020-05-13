import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navLinksAPI, navLinksIframe } from '../data/nav';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navLinks: any;
  navbarCollapsed = true;
  label: number;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.fetchNavigationLinks();
    this.label = environment.type;
  }

  public fetchNavigationLinks() {
    if (environment.type === 0) {
      this.navLinks = navLinksAPI;
    } else {
      this.navLinks = navLinksIframe;
    }
  }

  public navigate (location: any) {
    this.router.navigate([location]);
  }

  public onClick(menu: any) {
    menu.classList.remove('show');
  }

}
