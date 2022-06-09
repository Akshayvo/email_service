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
// import { CanonicalService } from "../../services/canonical.service"; 
import { environment } from "../../../environments/environment";
import { script,contactPageScript,ogContactPage,twitterContactPage, } from "../../data/script";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";



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
  contactForm: FormGroup;
  openComponent = false;
  imagetype: any;
  imageBaseUrl: any;
  viewRatesHeading: string;
  viewRatesPageContent: string;
  viewRatesPageTitle: string;
  viewRatesAltText: string;
  state: string;
  contactPageTitle: string;
  contactPageContent: string;
  contactHeading: string;
  og: any;
  twitter: any;
  script: any;

  private isUnsubscribe$: Subscription;

  constructor(
    private titleService: Title,
    private router: Router,
    private meta: Meta,
    private metaService: MetaService,
    private uaParserService: UaParserService,
    // private canonical: CanonicalService, 
    private formBuilder: FormBuilder,
    
  ) {
    this.fetchScript();
    this.loadScript();
    this.fetchOg();
    this.fetchTwitter();
    this.og.forEach((element) => {
      this.meta.updateTag({
        property: element.property,
        content: element.content,
      });
    });

    this.twitter.forEach((element) => {
      this.meta.updateTag({
        name: element.name,
        content: element.content,
      });
    });
    this.fetchMetaData();
    this.meta.updateTag({
      name: "description",
      content: `${this.contactPageContent}`,
    });
    this.titleService.setTitle(`${this.contactPageTitle}`);
    // this.canonical.create(); 
    this.state = script.state;
    this.fetchMetaData();
    this.meta.updateTag({
      name: "description",
      content: `${this.viewRatesPageContent}`,
    });
    this.titleService.setTitle(`${this.viewRatesPageTitle}`);
    // this.canonical.create(); 
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchViewRates();
    this.fetchViewRatesHeading();
    // this.fetchContactDetails();
    // this.fetchHours();
    // this.fetchContactHeading();
    this.metaService.createCanonicalURL();
    this.contactForm = this.formBuilder.group({
      name: ["", Validators.required],
      phone: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{3,5}$"
          ),
        ],
      ],
      email: ["", [Validators.required, Validators.email]],
      message: ["", Validators.required],
      subject: [""],
    });
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

  
  get f() {
    return this.contactForm.controls;
  }

  public fetchOg() {
    this.og = ogContactPage;
  }

  public fetchScript() {
    this.script = contactPageScript;
  }

  public loadScript() {
    const node = document.createElement("script"); // creates the script tag
    node.type = "application/ld+json"; // set the script type
    node.async = false; // makes script run asynchronously
    // node.charset = 'utf-8';
    node.innerHTML = JSON.stringify(this.script);
    // append to head of document
    document.getElementsByTagName("head")[0].appendChild(node);
  }

  public fetchTwitter() {
    this.twitter = twitterContactPage;
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
