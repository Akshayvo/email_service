import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { privacyPolicy } from '../data/privacy-policy';



@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  privacyPolicy: any;

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `This is the privacy policy for Rifle Self Storage. If you have any questions,
      please call or email our management team.`
    });
    this.titleService.setTitle('Privacy Policy | Rifle Self Storage');
  }

  ngOnInit() {
    this.fetchPrivacyPlicy();
  }

  public fetchPrivacyPlicy() {
    this.privacyPolicy = privacyPolicy;
  }
}
