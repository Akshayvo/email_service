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
    this.determineBaseUrl();
  }

  determineBaseUrl() {
    if (this.browserDetails) {
      const { browser: { name = 'Chrome', major = '32 '} } = this.browserDetails;
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
<<<<<<< HEAD
      this.baseUrl = `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Wallenpaupack/webp`;
    } else {
      this.baseUrl = 'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Wallenpaupack/jpg';
=======
      this.baseUrl = `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/webp`;
    } else {
      this.baseUrl = 'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/jpg';
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
    }
  }
}
