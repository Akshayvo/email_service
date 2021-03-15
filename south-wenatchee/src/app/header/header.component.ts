import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navLinks } from '../data/nav';
import { contactsLocation1,contactsLocation2 } from '../data/contact';
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
    this.fetchLocationDetails();
    this.router.events.subscribe(path => {
    });
    // window.onscroll = function() {
    //   this.HideContent()
    // };

    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function() {
    //   var currentScrollPos = window.pageYOffset;
    //   if (prevScrollpos > currentScrollPos) {
    //     document.getElementById("top-navbar").style.top = "0";
    //   } else {
    //     document.getElementById("top-navbar").style.top = "-50px";
    //   }
    //   prevScrollpos = currentScrollPos;
    // } 
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

  
  public fetchLocationDetails() {
    this.contactDetails = contactsLocation2;
  }

  // public fetchContactDetailsLocation1() {
  //   this.locationId = '1'
  //   this.contactDetails = contactsLocation1;

  // }
  
  // public fetchContactDetailsLocation2() {
  //   this.locationId = '2'
  //   this.contactDetails = contactsLocation2;
  // }
  // public HideContent() {
  //   if (window.pageYOffset >= this.sticky) {
  //     this.navbar.classList.add('sticky');
  //   } else {
  //     this.navbar.classList.remove('sticky');
  //   }
  // }

}
