import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { storageTip, storageTipAccordion } from '../data/storage';

@Component({
  selector: 'app-storage-tips',
  templateUrl: './storage-tips.component.html',
  styleUrls: ['./storage-tips.component.scss']
})
export class StorageTipsComponent implements OnInit {

  storageTip: any;
  storageTipAccordion: any;
  currentActive: any = 'STORAGE TIPS';

  constructor(
    private titleService: Title,
    private meta: Meta,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `We understand self storage, learn a thing or two and make your self storage experience easier
      with these handy storage unit tips!`
    });
    this.titleService.setTitle('Self Storage Tips | Stoner Trail Self Storage');
  }

  ngOnInit() {
    this.fetchStorageTip();
    this.fetchStorageTipAccordion();
    window.scrollTo(0, 0);
  }

  public fetchStorageTip() {
    this.storageTip = storageTip;
  }
  public fetchStorageTipAccordion () {
    this.storageTipAccordion = storageTipAccordion;
  }


}
