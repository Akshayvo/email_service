import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { storageTip, storageTipAccordion } from '../data/storage';
import { MetaService } from '../services/link.service';
import { howItWorksPageTitle, howItWorksPageContent } from '../data/title';
import { howItWorksHeading } from '../data/heading';
import { CanonicalService } from '../services/canonical.service';
import { ogHowItWorksPage, twitterHowItWorksPage } from '../data/script';
import { aboutUsHeading } from '../data/home';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

  storageTip: any;
  storageTipAccordion: any;
  howItWorksHeading: string;
  howItWorksPageTitle: string;
  howItWorksPageContent: string;
  og: any;
  twitter: any;
  aboutUsHeading: string;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private metaService: MetaService,
    private canonical: CanonicalService

  ) {
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
      content: `${this.howItWorksPageContent}`
    });
    this.titleService.setTitle(`${this.howItWorksPageTitle}`);
    this.canonical.create();

  }

  ngOnInit() {
    this.fetchStorageTip();
    this.fetchStorageTipAccordion();
    this.fetchhowItWorksHeading();
    window.scrollTo(0, 0);
    this.aboutUsHeading = aboutUsHeading;
  }


  
  public fetchOg() {
    this.og = ogHowItWorksPage;
}

public fetchTwitter() {
    this.twitter = twitterHowItWorksPage;
}

  public fetchMetaData() {
    this.howItWorksPageTitle = howItWorksPageTitle;
    this.howItWorksPageContent = howItWorksPageContent;
  }

  public fetchhowItWorksHeading() {
    this.howItWorksHeading = howItWorksHeading;
  }

  public fetchStorageTip() {
    this.storageTip = storageTip;
  }
  public fetchStorageTipAccordion () {
    this.storageTipAccordion = storageTipAccordion;
  }



}
