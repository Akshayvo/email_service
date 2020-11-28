import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { link } from 'fs';

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

    //  console.log('newStr, newStr1, newStr2', newStr, newStr1, newStr2);
    //  console.log('pathname', pathname);
     if (environment.production) {

      const link: HTMLLinkElement= this.dom.querySelector(`link[rel='canonical']`) || null

      if (link === null) {
        const link: HTMLLinkElement = this.dom.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.dom.head.appendChild(link);
              switch (true) {
                case str.includes('unit-sizer'): {
                  link.setAttribute('href', `${newStr1}`);
                  console.log('if - jumped on unit-sizer');
                  break;
                }
                case str.includes('about'): {
                  link.setAttribute('href', `${newStr}`);
                  console.log('if - jumped on about');
                  break;
                }
                case str.includes('directions'): {
                  link.setAttribute('href', `${newStr2}`);
                  console.log('if - jumped on directions');
                  break;
                }
                default: {
                  link.setAttribute('href', `${environment.websiteUrl}${pathname}`);
                  console.log('if - jumped on default'); 
                  break;
                }
                }
      } else {
        // link.setAttribute('rel', 'canonical');
        switch (true) {
          case str.includes('unit-sizer'): {
            link.setAttribute('href', `${newStr1}`);
            console.log('else - jumped on unit-sizer');
            break;
          }
          case str.includes('about'):  {
            link.setAttribute('href', `${newStr}`);
            console.log('else - jumped on about');
            break;
          }
          case str.includes('directions'): {
            link.setAttribute('href', `${newStr2}`);
            console.log('else - jumped on directions');
            break;
          }
          default: {
            link.setAttribute('href', `${environment.websiteUrl}${pathname}`);
            console.log('else - jumped on default');
            break;
          }
          }
      
      }

      }
   }
}