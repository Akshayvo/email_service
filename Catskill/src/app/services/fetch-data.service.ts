import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/internal/operators';
import { UnitTypes, LstUnitTypes, RentalPeriod } from '../models/unittypes';
import { PayTypes, LstPayTypes } from '../models/payment';


const httpOptions = {
  headers: new HttpHeaders({
    'APIKey':  'Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
    'Content-Type': 'application/json'
  })
};

// 'APIKey':  'MTEyOTE6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',

@Injectable({
  providedIn: 'root'
})


export class FetchDataService {

  // private url = `http://localhost:4200/api/facility/unittypes`;

  // private url = `https://simapi.syrasoft.com/1/api/facility/unittypes`;

  // private rentalPeriodUrl = `https://simapi.syrasoft.com/1/api/facility/rentalperiods`;

  // private url = `https://simapi.syrasoft.com/1/api/facility/contactus`;

  private url = `https://simapi.syrasoft.com/10.1.0.999/api/facility/unittypes`;

  private rentalPeriodUrl = `https://simapi.syrasoft.com/10.1.0.999/api/facility/rentalperiods`;

  private payMethodUrl = `https://simapi.syrasoft.com/10.1.0.999/api/facility/paymethods`;

  constructor(private http: HttpClient) { }

  getData(UnitTypes: UnitTypes): Observable<UnitTypes> {
    return this.http.get<UnitTypes>(this.url, httpOptions);
  }

  getRentalPeriod(RentalPeriod: RentalPeriod): Observable<RentalPeriod> {
    return this.http.get<RentalPeriod>(this.rentalPeriodUrl, httpOptions);
  }

  getPayMethods(lstPayTypes: LstPayTypes): Observable<LstPayTypes> {
    return this.http.get<LstPayTypes>(this.payMethodUrl, httpOptions);
  }
}
