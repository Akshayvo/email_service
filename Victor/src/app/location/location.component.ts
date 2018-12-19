import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { contactsMall, hoursMall, contactsVillage, hoursVillage  } from '../data/contact';
import { iframeMapMall, iframeMapVillage, tabs } from '../data/location';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit, OnDestroy {

  name: any;
  currentTab: any;
  contacts: any;
  hours: any;
  iframeAdd: any;
  head: any;
  tabs: any;
  ads: any;
  currentActive: any;
  private sub: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private route: ActivatedRoute,
    private router: Router,
    public sanitizer: DomSanitizer,
    private titleService: Title,
    ) {
      this.titleService.setTitle('Storage Units Near Victor, NY, 14564 | Victor Self Storage');
    }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.name = params['name'],
      this.currentTab = params['currentTab'];
    });
    this.fetchDetails(this.name);
    this.fetchTabs();
    this.ads = this.getSafeUrl(this.iframeAdd.url);
    this.window.scrollTo(0, 0);
  }


  public fetchDetails(name: string) {
    if ( this.name === 'village' ) {
      this.currentActive = 'Village Location';
      this.contacts = contactsVillage;
      this.hours = hoursVillage;
      this.iframeAdd = iframeMapVillage;
    } else {
      this.currentActive = 'Mall Location';
      this.contacts = contactsMall;
      this.hours = hoursMall;
      this.iframeAdd = iframeMapMall;
    }
  }

  public fetchTabs() {
    this.tabs = tabs;
  }

  getSafeUrl(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // public tabClicked(tabClicked: any) {
  //   console.log('Tab Clicked Name:', tabClicked);
  //   console.log('Tab Data is:', tabs);
  //   this.tabs = tabs.map((tab) => {
  //     tab.active = tab.name === tabClicked.name ? true : false;
  //   });

  // }
  // public getActiveTab() {
  //   const [currentTab] = this.tabs.filter((tab) => {
  //     if (tab.active) {
  //       return tab;
  //     }
  //   });
  //   console.log('Current Active Tab:', currentTab);
  //   return currentTab;
  // }

  public navigate (location: any) {
    this.router.navigate([location]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
