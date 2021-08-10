import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private data = new BehaviorSubject('');
  private image = new BehaviorSubject('');
  private content = new BehaviorSubject('');
  data$ = this.data.asObservable();
  image$ = this.image.asObservable();
  content$ = this.content.asObservable();

  changeData(data: string,image:any, content: any) {
    this.data.next(data)
    this.image.next(image)
    this.content.next(content)
  }}
