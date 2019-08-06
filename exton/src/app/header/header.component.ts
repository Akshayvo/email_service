import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navLinks } from '../data/nav';
import { contact} from '../data/contact';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navLinks: any;
  navbarCollapsed = true;
  contactInfo: any;


  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.fetchNavigationLinks();
    this.fetchContactDetails();
  }

  public fetchNavigationLinks() {
    this.navLinks = navLinks;
  }
  public fetchContactDetails() {
    this.contactInfo = contact;
  }

  public navigate (location: any) {
    this.router.navigate([location]);
  }

  public onClick(menu: any) {
    menu.classList.remove('show');
  }

}
