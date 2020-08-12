import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  places = [
    {
      id: 1,
      name: 'Hunterdon Storage At Ringoes',
    },
    {
      id: 2,
      name: 'Hunterdon Storage I',
    },
    {
      id: 3,
      name: 'Hunterdon Storage II',
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
