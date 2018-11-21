import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { navLinks } from '../data/nav';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbarToggler') navbarToggler: ElementRef;

  navLinks: any;
  navbarCollapsed = true;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.fetchNavigationLinks();
  }

  public fetchNavigationLinks() {
    this.navLinks = navLinks;
  }

  public navigate (location: any) {
    this.router.navigate([location]);
  }

navBarTogglerIsVisible() {
  return this.navbarToggler.nativeElement.offsetParent !== null;
}

collapseNav() {
  if (this.navBarTogglerIsVisible()) {
    this.navbarToggler.nativeElement.click();
  }
}

}
