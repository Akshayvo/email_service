import { Component, OnInit ,Inject} from '@angular/core';
import { storageTips } from '../data/storage-tips';
import { faq, faq1 } from '../data/faq';
import { WINDOW } from '@ng-toolkit/universal';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  storageTipAccordion: any ;
  faqAccordion: any;
  accordions:any;
  url:any;
  accordions1:any;

  constructor( 
  public router: Router,
  ) { }

  ngOnInit() {
    this.isSomePage();
    
  }

  public isSomePage() {
    if (this.router.url.includes(`${environment.locationName}/storage-tips`)) {
      this.fetchStorageTipAccordion();
      this.url = this.router.url
      
  } if(this.router.url.includes(`${environment.locationName}/frequently-asked-questions`)) {
    this.fetchFaqAccordion();
    this.url = this.router.url
  } 
}

  public fetchStorageTipAccordion() {
    this.accordions  = storageTips;
  }
  public fetchFaqAccordion() {
    this.accordions  = faq;
    this.accordions1 = faq1
  }
}
