import { Component, OnInit, Inject } from '@angular/core';
import { storagePoints, storageTips } from '../data/storage-tips';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { CanonicalService } from '../services/canonical.service';
import { ogAuctionPage, twitterAuctionPage } from '../data/script';
import { auctionTitle, auctionContent } from '../data/title';
import { tableData } from '../data/pay-rent';


@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss']
})
export class AuctionComponent implements OnInit {
  storagePoints: any;
  storageTips: any;
  contactloc: any;
  currentActive: any = 'Auction';
  breadcrumbActive: any = 'Auction';
  og: any;
  twitter: any;

  auctionTitle: string;
  auctionContent: string;
  constructor(
    @Inject(WINDOW) private window: Window,
    private meta: Meta,
    private titleService: Title,
    private canonical: CanonicalService
  ) {
    this.canonical.create();
    this.fetchMetaData();
    this.fetchOg();
    this.fetchcontact();
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
      content: `${this.auctionContent}`
    });
    this.titleService.setTitle(`${this.auctionTitle}`);
  }

  ngOnInit() {

    window.scrollTo(0, 0);
  }

  public fetchOg() {
    this.og = ogAuctionPage;
  }

  public fetchTwitter() {
    this.twitter = twitterAuctionPage;
  }

  public fetchMetaData() {
    this.auctionTitle = auctionTitle;
    this.auctionContent = auctionContent;
  }

  public fetchcontact(){
    this.contactloc = tableData;
  }
}