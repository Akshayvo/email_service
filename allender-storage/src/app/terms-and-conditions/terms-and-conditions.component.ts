import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { termsAndConditions } from '../data/terms-and-conditions';
import { MetaService } from '../services/link.service';
import { termsAndconditionsPageTitle, termsAndconditionsPageContent } from '../data/title';
import { termsAndConditionsHeading } from '../data/heading';
import { CanonicalService } from '../services/canonical.service';
import { ogStorageTipsPage, twitterStorageTipsPage } from '../data/script';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit {

  termsAndConditions: any;
  termsAndConditionsHeading: string;
  termsAndconditionsPageTitle: string;
  termsAndconditionsPageContent: string;
  og: any;
  twitter: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private metaService: MetaService,
    private canonical: CanonicalService) {
    
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
      content: `${this.termsAndconditionsPageContent}`
    });
    this.titleService.setTitle(`${this.termsAndconditionsPageTitle}`);
    this.canonical.create();
   }

  ngOnInit() {
    this.fetchStorageTip();
    this.fetchStorageTipsHeading();
    window.scrollTo(0, 0);
  }

  public fetchOg() {
    this.og = ogStorageTipsPage;
}

public fetchTwitter() {
    this.twitter = twitterStorageTipsPage;
}

  public fetchMetaData() {
    this.termsAndconditionsPageTitle = termsAndconditionsPageTitle;
    this.termsAndconditionsPageContent = termsAndconditionsPageContent;
  }

  public fetchStorageTipsHeading() {
    this.termsAndConditionsHeading = termsAndConditionsHeading;
  }

  public fetchStorageTip() {
    this.termsAndConditions = termsAndConditions;
  }
  


}
