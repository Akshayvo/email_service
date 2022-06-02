import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navLinks } from '../data/nav';
import { WINDOW } from '@ng-toolkit/universal';
import { contactsLocation1, socialLinks  } from '../data/contact';
import { UaParserService } from '../services/ua-parser.service';

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
  imagetype: any;
  imageBaseUrl: any;
  @Input() currentActive: any;
  locationId: any;
  // navbar = document.getElementById('navbar');
  // sticky = this.navbar.offsetTop;

  constructor(
    @Inject(WINDOW) private window: Window,
    private route: ActivatedRoute,
    private router: Router,
    private uaParserService: UaParserService,
  ) { 
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    this.fetchNavigationLinks();
    this.fetchContactDetails();
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


    // (function(){

    //   var doc = document.documentElement;
    //   var w = window;
    
    //   var prevScroll = w.scrollY || doc.scrollTop;
    //   var curScroll;
    //   var direction = 0;
    //   var prevDirection = 0;
    
    //   var header = document.getElementById('site-header');

    //   var navHeader  = document.getElementById('nav-header');
    
    //   var checkScroll = function() {
    
    //     /*
    //     ** Find the direction of scroll
    //     ** 0 - initial, 1 - up, 2 - down
    //     */
    
    //     curScroll = w.scrollY || doc.scrollTop;
    //     if (curScroll > prevScroll) { 
    //       //scrolled up
    //       direction = 2;
    //     }
    //     else if (curScroll < prevScroll) { 
    //       //scrolled down
    //       direction = 1;
    //     }
    
    //     if (direction !== prevDirection) {
    //       toggleHeader(direction, curScroll);
    //     }
        
    //     prevScroll = curScroll;
    //   };
    
    //   var toggleHeader = function(direction, curScroll) {
    //     if (direction === 2 && curScroll > 52) { 
          
    //       //replace 52 with the height of your header in px
    
    //       header.classList.add('hide');
    //       navHeader.classList.add('customClass');
    //       prevDirection = direction;
    //     }
    //     else if (direction === 1) {
    //       header.classList.remove('hide');
    //       navHeader.classList.remove('customClass');
    //       prevDirection = direction;
    //     }
    //   };
      
    //   window.addEventListener('scroll', checkScroll);
    
    // })();
  }

  public navigate (location: any) {
    this.router.navigate([location]);
  }

  public fetchNavigationLinks() {
    this.navLinks = navLinks;
  }

  public fetchContactDetails() {
    this.contactDetails = contactsLocation1;
    this.socialLinks = socialLinks
    
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
