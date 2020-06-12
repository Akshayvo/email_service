import { Component, OnInit, Input } from '@angular/core';
import { storageTips } from '../data/storage-tips';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  show = false;
  aData: Object;
  storageTipAccordion: any ;
  @Input() accordianData: any;

  constructor() { }

  ngOnInit() {
    this.fetchStorageTipAccordion();
  }

  public fetchStorageTipAccordion() {
    this.storageTipAccordion = storageTips;
  }
}
