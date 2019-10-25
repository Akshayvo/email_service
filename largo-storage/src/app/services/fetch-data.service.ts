import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/internal/operators';
import { UnitTypes, LstUnitTypes, RentalPeriod } from '../models/unittypes';
import { PayTypes, LstPayTypes } from '../models/payment';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class FetchDataService {

  // private url = `http://localhost:4200/api/facility/unittypes`;

  // private url = `https://simapi.syrasoft.com/1/api/facility/unittypes`;

  // private rentalPeriodUrl = `https://simapi.syrasoft.com/1/api/facility/rentalperiods`;

  // private url = `https://simapi.syrasoft.com/1/api/facility/contactus`;

  private url = `facility/unittypes`;

  private rentalPeriodUrl = `facility/rentalperiods`;

  private payMethodUrl = `facility/paymethods`;

  constructor(private http: HttpClient) { }

  getData(): Observable<UnitTypes> {
    return this.http.get<UnitTypes>(this.url);
  }

  getRentalPeriod(): Observable<RentalPeriod> {
    return this.http.get<RentalPeriod>(this.rentalPeriodUrl);
  }

  getPayMethods(): Observable<PayTypes> {
    return this.http.get<PayTypes>(this.payMethodUrl);
  }
}
