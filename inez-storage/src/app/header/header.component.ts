import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navLinks } from '../data/nav';
import {contactsLocation1, socialLinks } from '../data/contact'

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
  imgAlt: any;
  @Input() currentActive: any;
  locationId: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.fetchNavigationLinks();
    this.fetchContactDetails();
    this.router.events.subscribe(path => {
      this.isSomePage();
    });
  }

  public isSomePage() {
    if (this.router.url.includes('/location/inez-storage')) {
        this.logo = 'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Inez_Storage/inez-storage-logo-small.png';
        this.imgAlt = 'logo artwork displaying the words Inez Storage';
    } else  if (this.router.url.includes('/location/beck-road-storage'))  {
        this.logo = 'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Inez_Storage/Beck-Road-Storage-logo-small.png';
        this.imgAlt = 'logo artwork that has the words Beck Road Storage';
    } else {
      this.logo = 'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Inez_Storage/inez-storage-logo-small.png';
      this.imgAlt = 'logo artwork displaying the words Inez Storage';
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
  public fetchContactDetails(){
    this.contactDetails = contactsLocation1
    this.socialLinks = socialLinks;
  }
}
