import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { privacyPolicy } from '../data/privacy-policy';



@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class PrivacyPolicyComponent implements OnInit {

  privacyPolicy: any;

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: ``
    });
    this.titleService.setTitle('Privacy Policy | Carroll County Storage');
  }

  ngOnInit() {
    this.fetchPrivacyPlicy();
  }

  public fetchPrivacyPlicy() {
    this.privacyPolicy = privacyPolicy;
  }
}
