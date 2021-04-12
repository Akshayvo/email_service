import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navLinks } from '../data/nav';
import { contact, socialLinks } from '../data/contact';
import { UaParserService } from '../services/ua-parser.service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  contactDetails: any;
  navLinks: any;
  socialLinks: any;
  navbarCollapsed = true;
  imagetype: any;
  imageBaseUrl: any;

  constructor(
    private router: Router,
    private uaParserService: UaParserService,
  ) {
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    this.fetchNavigationLinks();
    this.fetchSocialLinks();
    this.fetchContactDetails();

    (function(){

      var doc = document.documentElement;
      var w = window;
    
      var prevScroll = w.scrollY || doc.scrollTop;
      var curScroll;
      var direction = 0;
      var prevDirection = 0;
    
      // var header = document.getElementById('site-header');

      var navHeader  = document.getElementById('nav-header');
    
      var checkScroll = function() {
    
        /*
        ** Find the direction of scroll
        ** 0 - initial, 1 - up, 2 - down
        */
    
        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) { 
          //scrolled up
          direction = 2;
        }
        else if (curScroll < prevScroll) { 
          //scrolled down
          direction = 1;
        }
    
        if (direction !== prevDirection) {
          toggleHeader(direction, curScroll);
        }
        
        prevScroll = curScroll;
      };
    
      var toggleHeader = function(direction, curScroll) {
        if (direction === 2 && curScroll > 52) { 
          
          //replace 52 with the height of your header in px
    
          // header.classList.add('hide');
          navHeader.classList.add('customClass');
          prevDirection = direction;
        }
        else if (direction === 1) {
          // header.classList.remove('hide');
          navHeader.classList.remove('customClass');
          prevDirection = direction;
        }
      };
      
      window.addEventListener('scroll', checkScroll);
    
    })();
  }

  public fetchContactDetails() {
    this.contactDetails = contact;
  }

  public fetchSocialLinks() {
    this.socialLinks = socialLinks;

  }

  public fetchNavigationLinks() {
    this.navLinks = navLinks;
  }

  public navigate (location: any) {
    if (location === '/view-rates') {
      this.router.navigate([`${environment.locationName}/${location}`]);
    } else {
      this.router.navigate([location]);
    } 
  }

  public onClick(menu: any) {
    menu.classList.remove('show');
  }

}
