import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  places = [
    {
      id: 1,
      name: `Garner's U Store - 1321 North Jefferson St`,
    },
    {
      id: 2,
      name: `Garner's U Store - 1687 US-441 Location`,
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
