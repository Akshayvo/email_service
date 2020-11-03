import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { boatAndRvHeading } from '../data/heading';
import { boatandrvPageTitle, boatandrvPageContent  } from '../data/title';
import { boatandrvH2Text, boarandrvParagraph } from '../data/boatAndRv';
import { UaParserService } from '../services/ua-parser.service';
import { boatandrvFeaturesList } from '../data/boatAndRv';

@Component({
  selector: 'app-boat-and-rv',
  templateUrl: './boat-and-rv.component.html',
  styleUrls: ['./boat-and-rv.component.scss']
})
export class BoatAndRvComponent implements OnInit {

  boatAndRvHeading: string;
  boatandrvPageTitle: string;
  boatandrvPageContent: string;
  boatandrvH2Text: any;
  boarandrvParagraph: any;
  imagetype: any;
  imageBaseUrl: any;
  boatandrvFeaturesList: any;

  constructor(
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private uaParserService: UaParserService,
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.boatandrvPageContent}`
    });
    this.titleService.setTitle(`${this.boatandrvPageTitle}`);
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
   }
   public navigate(location: any) {
    this.router.navigate([location]);
  }

  ngOnInit() {
    this.fetchHeading();
    this.fetchParagraphs();
    this.fetchFeature();
  }

  public fetchHeading() {
    this.boatAndRvHeading = boatAndRvHeading;
    this.boatandrvH2Text = boatandrvH2Text;
    this.boarandrvParagraph = boarandrvParagraph;
  }

  public fetchParagraphs() {
    this.boarandrvParagraph = boarandrvParagraph;
  }

  public fetchFeature() {
    this.boatandrvFeaturesList = boatandrvFeaturesList;
  }

  public fetchMetaData() {
    this.boatandrvPageTitle = boatandrvPageTitle;
    this.boatandrvPageContent = boatandrvPageContent;
  }

}
