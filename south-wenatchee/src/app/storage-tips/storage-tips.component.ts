import { Component, OnInit, Inject } from '@angular/core';
import { storagePoints, storageTips } from '../data/storage-tips';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { CanonicalService } from '../services/canonical.service';
import { ogStorageTipsPage, twitterStorageTipsPage } from '../data/script';

@Component({
  selector: 'app-storage-tips',
  templateUrl: './storage-tips.component.html',
  styleUrls: ['./storage-tips.component.scss']
})


export class StorageTipsComponent implements OnInit {
  storagePoints: any;
  storageTips: any;
  currentActive: any = 'Storage Tips';
  breadcrumbActive: any = 'Storage Tips';
  og: any;
  twitter: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private meta: Meta,
    private titleService: Title,
    private canonical: CanonicalService
    ) {
      this.canonical.create();
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
      content: `Take a moment to review our storage tips page and make your self storage experience a breeze!`
    });
    this.titleService.setTitle('Storage Tips  | South Wenatchee Self Stoage');
  }

  ngOnInit() {
    this.fetchstoragePoints();
    this.fetchstorageTips();
    window.scrollTo(0, 0);
  }

  public fetchOg() {
    this.og = ogStorageTipsPage;
}

public fetchTwitter() {
    this.twitter = twitterStorageTipsPage;
}


  public fetchstoragePoints() {
    this.storagePoints = storagePoints;
  }

  public fetchstorageTips() {
    this.storageTips = storageTips;
  }
}
