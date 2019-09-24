import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit,Inject, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { nearbyAttractions, locatedNear, locationContent } from '../data/location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],

})
export class LocationComponent implements OnInit {
  nearbyAttractions:any;
  locatedNear:any;
  locationContent:any;
  
  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta
  ) { 
    this.meta.addTag({
      name: 'description',
      content: `The Coach House is tucked away in the Palmetto countryside, yet we're only a stone's throw away from everything you need!`
    });
    this.titleService.setTitle('Location Information | The Coach House');
  }

  ngOnInit() {
    this.fetchNearbyAttractions();
    this.fetchLocatedNear();
    this.fetchLocationContent();
  }
  public fetchNearbyAttractions(){
    this.nearbyAttractions = nearbyAttractions;
  }
  public fetchLocatedNear(){
    this.locatedNear = locatedNear;
  }
  public fetchLocationContent(){
    this.locationContent = locationContent;
  }
}
