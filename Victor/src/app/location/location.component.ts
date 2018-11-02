import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { contactsMall, hoursMall, contactsVillage, hoursVillage  } from '../data/contact';
import { iframeMapMall, iframeMapVillage, tabs } from '../data/location'
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit, OnDestroy {

  name: any;
  private sub: any;
  contacts: any;
  hours: any;
  iframeAdd: any;
  head: any;
  tabs: any;
  ads: any;

  constructor( private route: ActivatedRoute, private router: Router,
    public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.name = params['name']; 
    });
    this.fetchDetails(this.name);
    this.fetchTabs();
    this.ads = this.getSafeUrl(this.iframeAdd.url);
  }


  public fetchDetails(name) {
    if ( this.name == 'village' ) {
      this.contacts = contactsVillage;      
      this.hours = hoursVillage;
      this.iframeAdd = iframeMapVillage;      
    } else {
      this.contacts = contactsMall;
      this.hours = hoursMall;
      this.iframeAdd = iframeMapMall;
    }
  }

  public fetchTabs() {
    this.tabs = tabs;
  }

  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
}

public navigate (location) {
  this.router.navigate([location]);
}
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
