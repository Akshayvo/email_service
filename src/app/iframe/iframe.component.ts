import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})

export class IframeComponent implements OnInit {
  
  ads: any;
  urlAddress: any; 
  @Input('urlAdd') urlAdd;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.urlAddress = this.urlAdd;
    this.ads = this.getSafeUrl(this.urlAddress.src);
    
  }


  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
}

}

