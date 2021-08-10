import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private data = new BehaviorSubject('');
  private dynamicImage = new BehaviorSubject('');
  private viewRatesContent = new BehaviorSubject('');
  data$ = this.data.asObservable();
  dynamicImage$ = this.dynamicImage.asObservable();
  viewRatesContent$ = this.viewRatesContent.asObservable();

  changeData(data: string, dynamicImage:any, viewRatesContent: any) {
    this.data.next(data)
    this.dynamicImage.next(dynamicImage);
    this.viewRatesContent.next(viewRatesContent);
  }}
