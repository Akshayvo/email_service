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
  status = false;
  @Input() currentActive: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.fetchNavigationLinks();
  }

  public navigate (location: any) {
    this.router.navigate([location]);
  }

  public fetchNavigationLinks() {
    this.navLinks = navLinks;
  }

  public onClick(menu: any) {
    menu.classList.remove('show', 'hover');
  }

  public showUl(menu: any) {
    menu.classList.add('show');
    this.status = true;
  }
}
