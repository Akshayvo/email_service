import { Component, OnInit, OnDestroy, ViewChild  } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { amenitiesHeading } from '../data/heading';
import { amenitiesPageContent, amenitiesPageTitle } from '../data/title';
import { Router } from '@angular/router';
import { MetaService } from '../services/link.service';
import { amenitiesData } from '../data/amenities';


@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.scss']
})
export class AmenitiesComponent implements OnInit {

  amenitiesHeading: string;
  amenitiesPageContent: string;
  amenitiesPageTitle: string;
  amenitiesData: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private router: Router,
    private metaService: MetaService,
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.amenitiesPageContent}`
    });
    this.titleService.setTitle(`${this.amenitiesPageTitle}`);
   }

  ngOnInit() {
    this.fetchAmenitiesHeading();
    this.fetchAmenitiesData();
  }

  public fetchMetaData () {
    this.amenitiesPageContent = amenitiesPageContent;
    this.amenitiesPageTitle = amenitiesPageTitle;
  }

  public fetchAmenitiesHeading() {
    this.amenitiesHeading = amenitiesHeading;
    
  }

  public fetchAmenitiesData() {
    this.amenitiesData = amenitiesData;

  }

}
