import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/internal/operators';
import { UnitTypes, LstUnitTypes, RentalPeriod } from '../models/unittypes';
import { PayTypes, LstPayTypes } from '../models/payment';

import { environment } from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'APIKey':  `${environment.APIKey}`,
    'Content-Type': 'application/json'
  })
};

// 'APIKey':  'MTEyOTE6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',

const baseUrl = environment.baseUrl;


@Injectable({
  providedIn: 'root'
})


export class FetchDataService {

  // private url = `http://localhost:4200/api/facility/unittypes`;

  // private url = `https://simapi.syrasoft.com/1/api/facility/unittypes`;

  // private rentalPeriodUrl = `https://simapi.syrasoft.com/1/api/facility/rentalperiods`;

  // private url = `https://simapi.syrasoft.com/1/api/facility/contactus`;

  private url = `${baseUrl}facility/unittypes`;

  private rentalPeriodUrl = `${baseUrl}facility/rentalperiods`;

  private payMethodUrl = `${baseUrl}facility/paymethods`;

  constructor(private http: HttpClient) { }

  getData(UnitTypes: UnitTypes): Observable<UnitTypes> {
    return this.http.get<UnitTypes>(this.url, httpOptions);
  }

  getRentalPeriod(RentalPeriod: RentalPeriod): Observable<RentalPeriod> {
    return this.http.get<RentalPeriod>(this.rentalPeriodUrl, httpOptions);
  }

  getPayMethods(PayTypes: PayTypes): Observable<PayTypes> {
    return this.http.get<PayTypes>(this.payMethodUrl, httpOptions);
  }
}
