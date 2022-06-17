import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { dataViewRates, viewRatesAltText } from "../../data/view-rates";
import { MetaService } from "../../services/link.service";
import { FetchDataService } from "../services/fetch-data.service";
import { UnitTypes, LstUnitTypes } from "../models/unittypes";
import { UaParserService } from "../../services/ua-parser.service";
import { Subscription } from "rxjs";
import { viewRatesHeading } from "../../data/heading";
import { viewRatesPageTitle, viewRatesPageContent } from "../../data/title";
import { Router } from "@angular/router";
import { CanonicalService } from "../../services/canonical.service";
import { environment } from "../../../environments/environment";
import {
  homePageScript,
  ogHomePage,
  script,
  twitterHomePage,
} from "../../data/script";


@Component({
  selector: "app-view-rates",
  templateUrl: "./view-rates.component.html",
  styleUrls: ["./view-rates.component.scss"],
})
export class ViewRatesComponent implements OnInit, OnDestroy {
  viewRates: any;
  showTable = false;
  unitTypes: UnitTypes;
  LstUnitTypes: LstUnitTypes[];

  DescriptionVR: string;
  MonthlyRateVR: number;

  openComponent = false;
  imagetype: any;
  imageBaseUrl: any;
  viewRatesHeading: string;
  viewRatesPageContent: string;
  viewRatesPageTitle: string;
  viewRatesAltText: string;
  state: string;
  private isUnsubscribe$: Subscription;
  ogHomePage: any;
  twitterHomePage: any
    script: any;

  constructor(
    private titleService: Title,
    private router: Router,
    private meta: Meta,
    private metaService: MetaService,
    private uaParserService: UaParserService,
    private canonical: CanonicalService
  ) {
    this.state = script.state;
    this.fetchScript();
    this.loadScript();
    this.fetchMetaData();
    this.fetchOgHomePage();
    this.fetchTwitterHomePage();
    this.ogHomePage.forEach((element) => {
      this.meta.updateTag({
        property: element.property,
        content: element.content,
      });
    });

    this.twitterHomePage.forEach((element) => {
      this.meta.updateTag({
        name: element.name,
        content: element.content,
      });
    });
  
    this.meta.updateTag({
      name: "description",
      content: `${this.viewRatesPageContent}`,
    });
    this.titleService.setTitle(`${this.viewRatesPageTitle}`);
    this.canonical.create();
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchViewRates();
    this.fetchViewRatesHeading();
  }


  findMinMax(arr) {
    let min = arr[0].MonthlyRate,
      max = arr[0].MonthlyRate;
    for (let i = 1, len = arr.length; i < len; i++) {
      let v = arr[i].MonthlyRate;
      min = v < min ? v : min;
      max = v > max ? v : max;
    }

    return [min, max];
  }

  // getData() {
  //   this.getDataSubscribe$ = this.fetchDataService.getData()
  //     .subscribe(unitTypesResponse => {
  //       this.findMinMax(unitTypesResponse.lstUnitTypes)

  //    const min = this.findMinMax(unitTypesResponse.lstUnitTypes)[0];
  //    const max= this.findMinMax(unitTypesResponse.lstUnitTypes)[1];

  //    console.log('this.findMinMax(unitTypesResponse.lstUnitTypes)[0]', min,
  //    'this.findMinMax(unitTypesResponse.lstUnitTypes)[1]', max);

  //     });
  //   }

  public loadScript() {
    const node = document.createElement("script"); // creates the script tag
    node.type = "application/ld+json"; // set the script type
    node.async = false; // makes script run asynchronously
    // node.charset = 'utf-8';
    node.innerHTML = JSON.stringify(this.script);
    // append to head of document
    // document.getElementsByTagName('head')[0].appendChild(node);
    document.head.appendChild(node);
  }

  public fetchScript() {
    this.script = homePageScript;
  }

  public fetchOgHomePage() {
    this.ogHomePage = ogHomePage;
  }

  public fetchTwitterHomePage() {
    this.twitterHomePage = twitterHomePage;
  }

  public navigate(location: any) {
    if (
      location === "/view-rates" ||
      location === "/storage-tips" ||
      location === "/reserve-unit"
    ) {
      this.router.navigate([`${environment.locationName}/${location}`]);
    } else {
      this.router.navigate([`${location}`]);
    }
  }

  public fetchViewRates() {
    this.viewRates = dataViewRates;
    this.viewRatesAltText = viewRatesAltText;
  }

  public fetchViewRatesHeading() {
    this.viewRatesHeading = viewRatesHeading;
  }

  public fetchMetaData() {
    this.viewRatesPageContent = viewRatesPageContent;
    this.viewRatesPageTitle = viewRatesPageTitle;
  }

  handleClick(event: Event, event1: Event) {
    this.openComponent = true;
    this.DescriptionVR = JSON.parse(JSON.stringify(event));
    this.MonthlyRateVR = parseFloat(JSON.stringify(event1));
  }

  public ngOnDestroy(): void {
    if (this.isUnsubscribe$ && this.isUnsubscribe$.closed) {
      this.isUnsubscribe$.unsubscribe();
    }
  }
}
