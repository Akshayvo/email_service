import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder  } from '@angular/forms';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.scss']
})
export class SelectLocationComponent implements OnInit {

  getLocation: FormGroup;
  locationId: any;
  places = [
    {
      id: 1,
      name: 'Carroll County Storage - McKenzie',
    },
    {
      id: 2,
      name: 'Carroll County Storage - Huntingdon',
    },
    {
      id: 3,
      name: 'Carroll County Storage at the Airport',
    },
 ];


  constructor(private formBuilder: FormBuilder,
              private data: LocationService) { }

  ngOnInit() {
  this.data.currentLocation.subscribe(locationId => this.locationId = locationId);
  this.getLocation = this.formBuilder.group({
    location: [this.locationId],
  });
 }

  sendMessage() {
    this.data.changeLocation(this.getLocation.value.location);
  }
}
