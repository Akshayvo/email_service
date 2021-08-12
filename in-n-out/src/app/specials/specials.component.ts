import { Component, OnInit, Inject } from '@angular/core';
import { storagePoints, storageTips } from '../data/storage-tips';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { CanonicalService } from '../services/canonical.service';
import { ogSpecialsPage, twitterSpecialsPage } from '../data/script';
import { specialsTitle, specialsContent } from '../data/title';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.scss']
})
export class SpecialsComponent implements OnInit {
  
  currentActive: any = 'Specials';
  breadcrumbActive: any = 'Specials';
  og: any;
  twitter: any;
  specialsTitle: string;
  specialsContent: string;

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
      content: `${this.specialsContent}`
    });
    this.titleService.setTitle(`${this.specialsTitle}`);
  }

  ngOnInit() {
    
    window.scrollTo(0, 0);
  }

  public fetchOg() {
    this.og = ogSpecialsPage;
}

public fetchTwitter() {
    this.twitter = twitterSpecialsPage;
}

public fetchMetaData() {
  this.specialsTitle = specialsTitle;
  this.specialsContent = specialsContent;
}


  

}
