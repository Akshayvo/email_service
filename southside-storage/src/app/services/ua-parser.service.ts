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
    // console.log('The Browser Details:', this.browserDetails);
    this.determineBaseUrl();
    // console.log('Base Url:', this.baseUrl);
  }

  determineBaseUrl() {
    if (this.browserDetails) {
      const { browser: { name = 'Chrome', major = '32 '} } = this.browserDetails;
      // console.log(`Browser Name: ${name} Major: ${major}`);
      switch (name) {
        case 'Chrome':
          this.typeOfImages = (major && major < 32) ? 'JPG' : 'WEBP';
          break;
        case 'Firefox':
          this.typeOfImages = (major && major < 65) ? 'JPG' : 'WEBP';
          break;
        default:
          this.typeOfImages = 'JPG';
          break;
      }
    }
    if (this.typeOfImages === 'WEBP') {
      this.baseUrl = `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Southside_Storage/webp`;
    } else {
      this.baseUrl = 'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Southside_Storage/jpg ';
    }
  }
}
