import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  places = [
    {
      id: 1,
      name: 'Dallas Secure Storage',
    },
    {
      id: 3,
      name: 'Godsey Secure Storage',
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
