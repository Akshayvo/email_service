import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { UnitTypes, RentalPeriod } from '../models/unittypes';
import { PayTypes } from '../models/payment';
@Injectable({
  providedIn: 'root'
})


export class FetchDataService {

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
