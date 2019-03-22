import { Component, OnInit } from '@angular/core';
import { storageTips } from '../data/storage-tips';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  storageTipAccordion: any ;

  constructor() { }

  ngOnInit() {
    this.fetchStorageTipAccordion();
  }

  public fetchStorageTipAccordion() {
    this.storageTipAccordion = storageTips;
  }
}
