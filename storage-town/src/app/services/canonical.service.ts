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
     let newStr1 = str.replace('storage-units', 'unit-sizer');
     let newStr = str.replace('storage-units', 'about');
     let newStr2 = str.replace('storage-units', 'directions');

     console.log('newStr, newStr1, newStr2', newStr, newStr1, newStr2);
     console.log('pathname', pathname);
     if (environment.production) {
      const link: HTMLLinkElement = this.dom.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(link);
      link.setAttribute('href', `${environment.websiteUrl}${pathname}`);

      if (str.includes("storage-units")) {
        console.log('storage-units  included');
        
        const link1: HTMLLinkElement = this.dom.createElement('link');
        link1.setAttribute('rel', 'canonical');
        this.dom.head.appendChild(link1);
        link1.setAttribute('href', `${newStr}`);
      
  
        const link2: HTMLLinkElement = this.dom.createElement('link');
        link2.setAttribute('rel', 'canonical');
        this.dom.head.appendChild(link2);
        link2.setAttribute('href', `${newStr1}`);
  
  
        const link3: HTMLLinkElement = this.dom.createElement('link');
        link3.setAttribute('rel', 'canonical');
        this.dom.head.appendChild(link3);
        link3.setAttribute('href', `${newStr2}`);
       }
      }
   }
}
