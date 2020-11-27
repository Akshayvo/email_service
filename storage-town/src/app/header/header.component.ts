import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navLinks } from '../data/nav';
import { WINDOW } from '@ng-toolkit/universal';

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
  // navbar = document.getElementById('navbar');
  // sticky = this.navbar.offsetTop;

  constructor(
    @Inject(WINDOW) private window: Window,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.fetchNavigationLinks();
    this.router.events.subscribe(path => {
    });
    // window.onscroll = function() {
    //   this.HideContent()
    // };
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

  // public HideContent() {
  //   if (window.pageYOffset >= this.sticky) {
  //     this.navbar.classList.add('sticky');
  //   } else {
  //     this.navbar.classList.remove('sticky');
  //   }
  // }

}
