import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  places = [
    {
      id: 1,
      name: 'Inez Storage',
    },
    {
      id: 3,
      name: 'Beck Road Storage',
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
