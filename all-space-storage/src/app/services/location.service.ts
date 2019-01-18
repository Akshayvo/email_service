import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
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
 private locationSource = new BehaviorSubject(this.places[0].id);
 // tslint:disable-next-line:member-ordering
 currentLocation = this.locationSource.asObservable();

  constructor() { }

  changeLocation (locationId: any) {
    this.locationSource.next(locationId);
  }
}
