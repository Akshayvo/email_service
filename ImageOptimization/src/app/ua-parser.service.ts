import { Injectable } from '@angular/core';
import { UAParser } from 'ua-parser-js';

@Injectable({
  providedIn: 'root'
})
export class UaParserService {
  uaParser: any;
  browserDetails: any;
  typeOfImages: any;
  baseUrl: any;
  constructor() {
    this.uaParser = new UAParser();
    this.browserDetails = this.uaParser.getResult();
    console.log('The Browser Details:', this.browserDetails);
    this.determineBaseUrl();
    console.log('Base Url:', this.baseUrl);
    
  }

  determineBaseUrl() {
    if(this.browserDetails) {
      const { browser: { name = 'Chrome', major = '32 '} } = this.browserDetails;
      console.log(`Browser Name: ${name} Major: ${major}`);
      switch (name) {
        case 'Chrome':
          this.typeOfImages = (major && major < 32) ? 'PNG' : 'WEBP'; 
          break;
        case 'Firefox':
            this.typeOfImages = (major && major < 65) ? 'PNG' : 'WEBP';
          break;
        default:
          this.typeOfImages = 'PNG';
          break;
      }
    }
    if(this.typeOfImages === 'WEBP') {
      this.baseUrl = `https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Catskill_Images/webp`;
    } else {
      this.baseUrl = 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Catskill_Images/png'
    }
  }
}
