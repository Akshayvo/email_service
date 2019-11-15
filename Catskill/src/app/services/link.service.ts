import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../environments/environment';

@Injectable({
   providedIn: 'root'
})

export class MetaService {
   constructor(@Inject(DOCUMENT) private dom: any) { }

   createCanonicalURL() {
     const { location: {pathname} } = window;
     if (environment.production) {
      const link: HTMLLinkElement = this.dom.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(link);
      link.setAttribute('href', `${environment.websiteUrl}${pathname}`);
     }
   }
}
