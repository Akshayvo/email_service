import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { faqPageTitle } from '../data/title';
import { faqHeading } from '../data/heading';
import { faq } from '../data/faq';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqPageTitle: any;
  script: any;
  faqHeading: string;
  faq: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private router: Router,
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      // content: `${this.faqPagecontent}`
    });
    this.titleService.setTitle(`${this.faqPageTitle}`);
  }

  ngOnInit() {
    // this.fetchScript();
    this.fetchHeading();
    this.fetchFaqData();
  }

  public navigate(location: any) {
    if ((location === '/view-rates') || (location === '/storage-tips') || (location === '/reserve-unit')) {
      this.router.navigate([`${environment.locationName}/${location}`]);
    } else {
      this.router.navigate([`${location}`]); 
    }
  }


  public fetchMetaData () {
    this.faqPageTitle = faqPageTitle;
  }

  // public fetchScript() {
  //   this.script = faqScript;
  // }

  public fetchHeading() {
    this.faqHeading = faqHeading;
  }

  public fetchFaqData() {
    this.faq = faq;
  }
}
