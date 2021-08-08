import { Component, OnInit, Inject } from '@angular/core';
import { trailerPoints } from '../data/trailer-info';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { CanonicalService } from '../services/canonical.service';
import { ogTrailerInfoPage, twitterTrailerInfoPage } from '../data/script';
import { trailerInfoTitle, trailerInfoContent } from '../data/title';

@Component({
  selector: 'app-trailer-info',
  templateUrl: './trailer-info.component.html',
  styleUrls: ['./trailer-info.component.scss']
})
export class TrailerInfoComponent implements OnInit {

  trailerPoints: any;
  trailerInfo: any;
  currentActive: any = 'Trailer Information';
  breadcrumbActive: any = 'Trailer Information';
  og: any;
  twitter: any;
  trailerInfoTitle: string;
  trailerInfoContent: string;

  constructor(
    @Inject(WINDOW) private window: Window,
    private meta: Meta,
    private titleService: Title,
    private canonical: CanonicalService
    ) {
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
      content: `${this.trailerInfoContent}`
    });
    this.titleService.setTitle(`${this.trailerInfoTitle}`);
  }

  ngOnInit() {
    this.fetchstoragePoints();
    // this.fetchtrailerInfo();
    window.scrollTo(0, 0);
  }

  public fetchOg() {
    this.og = ogTrailerInfoPage;
}

public fetchTwitter() {
    this.twitter = twitterTrailerInfoPage;
}

public fetchMetaData() {
  this.trailerInfoTitle = trailerInfoTitle;
  this.trailerInfoContent = trailerInfoContent;
}


  public fetchstoragePoints() {
    this.trailerPoints = trailerPoints;
  }

  // public fetchtrailerInfo() {
  //   this.trailerInfo = trailerInfo;
  // }

}
