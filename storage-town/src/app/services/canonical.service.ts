import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanonicalService {

  constructor(
    @Inject(DOCUMENT) private dom: any,
    ) {      
     }

   create() {
     const { location: {pathname} } = window;
     let str = `${environment.websiteUrl}${pathname}`;
     let newStr1 = str.replace( 'unit-sizer', 'storage-units');
     let newStr = str.replace('about', 'storage-units');
     let newStr2 = str.replace('directions', 'storage-units');

     console.log('newStr, newStr1, newStr2', newStr, newStr1, newStr2);
     console.log('pathname', pathname);
     if (environment.production) {
      const link: HTMLLinkElement = this.dom.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(link);
      // link.setAttribute('href', `${environment.websiteUrl}${pathname}`);

      switch (true) {
        case str.includes('unit-sizer'):
          link.setAttribute('href', `${newStr1}`);
          break;
        case str.includes('about'): 
          link.setAttribute('href', `${newStr}`);
          break;
        case str.includes('directions'): 
          link.setAttribute('href', `${newStr}`);
          break;
        default: 
          link.setAttribute('href', `${environment.websiteUrl}${pathname}`);
          break;
        }
      }
   }
}
