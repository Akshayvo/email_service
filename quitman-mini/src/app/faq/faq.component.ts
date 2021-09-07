import { Component, OnInit,Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { faqPageTitle, faqPageContent } from '../data/title';
import { faqHeading } from '../data/heading';
import { faq } from '../data/faq';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';
import { WINDOW } from '@ng-toolkit/universal';
import { ogFaqPage, twitterFaqPage } from '../data/script';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqPageTitle: any;
  faqPageContent:any;
  script: any;
  faqHeading: string;
  faq: any;
  og: any;
  twitter: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private meta: Meta,
    private router: Router,
    private titleService: Title,
    private canonical: CanonicalService
  ) 
    {
      this.canonical.create();
      this.fetchMetaData();
      this.fetchOg();
      this.fetchTwitter();
      this.og.forEach(element => {
        this.meta.addTag({
          property: element.property,
          content: element.content
        })
      });
  
      this.twitter.forEach(element => {
        this.meta.addTag({
          name: element.name,
          content: element.content
        })
      });
    this.meta.addTag({
      name: 'description',
      content: `${this.faqPageContent}`
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

  public fetchOg() {
    this.og = ogFaqPage;
}

public fetchTwitter() {
    this.twitter = twitterFaqPage;
}

  public fetchHeading() {
    this.faqHeading = faqHeading;
  }

  public fetchFaqData() {
    this.faq = faq;
  }
}
