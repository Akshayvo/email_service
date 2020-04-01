import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { storageTip, storageTipAccordion } from '../data/storage';
import { storageTips } from '../data/blurb';
import { CanonicalService } from '../services/canonical.service'
import { storageTipsHeading } from '../data/heading';

@Component({
  selector: 'app-storage-tips',
  templateUrl: './storage-tips.component.html',
  styleUrls: ['./storage-tips.component.scss']
})
export class StorageTipsComponent implements OnInit {

  storageTip: any;
  storageTipAccordion: any;
  storageTips: any;
  storageTipsHeading: string;

  constructor(@Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
    ) {
      this.canonical.create();
      this.fetchStorageTipsHeading();
    this.meta.addTag({
      name: 'description',
      content: `Moving is stressful enough, use our handy storage tips page to make your experience a stress-free one! `
    });
    this.titleService.setTitle('Storage Tips | Rifle Self Storage');
  }

  ngOnInit() {
    this.fetchStorageTip();
    this.fetchStorageTipAccordion();
    this.fetchStorageTips();
    window.scrollTo(0, 0);
  }

  public fetchStorageTip() {
    this.storageTip = storageTip;
  }

  public fetchStorageTipAccordion () {
    this.storageTipAccordion = storageTipAccordion;
  }

  public fetchStorageTips() {
    this.storageTips = storageTips;
  }

  public fetchStorageTipsHeading() {
    this.storageTipsHeading = storageTipsHeading;
  }
}
