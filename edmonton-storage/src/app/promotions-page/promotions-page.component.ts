import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { CanonicalService } from '../services/canonical.service';
import { ogPromotionsPage, twitterPromotionsPage } from '../data/script';
import { promotionsPageTitle, promotionsPageContent } from '../data/title';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-promotions-page',
  templateUrl: './promotions-page.component.html',
  styleUrls: ['./promotions-page.component.scss']
})
export class PromotionsPageComponent implements OnInit {
  

  
  currentActive: any = 'Promotions';
  breadcrumbActive: any = 'Promotions';
  og: any;
  twitter: any;
  promotionsPageTitle: string;
  promotionsPageContent: string;

  constructor(
    @Inject(WINDOW) private window: Window,
    private meta: Meta,
    private titleService: Title,
    private router: Router,
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
      content: `${this.promotionsPageContent}`
    });
    this.titleService.setTitle(`${this.promotionsPageTitle}`);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  public fetchOg() {
    this.og = ogPromotionsPage;
}

public fetchTwitter() {
    this.twitter = twitterPromotionsPage;
}

public fetchMetaData() {
  this.promotionsPageTitle = promotionsPageTitle;
  this.promotionsPageContent = promotionsPageContent;
}

public navigateToStorageUnits1() {
    this.router.navigate([`${environment.locationName}/guardian/storage-units`],
          );
        }
    
    
public navigateToStorageUnits2() {
  this.router.navigate([`${environment.locationName}/access-mini/storage-units`],
);
      }
 

}
