import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
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
      name: 'AllSpace Storage - Poughkeepsie',
    },
    {
      id: 2,
      name: 'AllSpace Storage - Highland',
    },
    {
      id: 3,
      name: 'AllSpace Storage - Lake Katrine',
    },
    {
      id: 4,
      name: 'AllSpace Storage - Pawling',
    },
 ];
 @Output() messageEvent = new EventEmitter<string>();


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
    // this.messageEvent.emit(this.getLocation.value.location);
    console.log(this.getLocation.value.location);
  }
}
