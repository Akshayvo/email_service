import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { privacyPolicy } from '../data/privacy-policy';
import { privacyPolicyPageContent, privacyPolicyPageTitle } from '../data/title';
import { CanonicalService } from '../services/canonical.service';
import { environment} from '../../environments/environment';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  privacyPolicy: any;
  privacyPolicyPageTitle: string;
  privacyPolicyPageContent: string;
  facilityName: string;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService
  ) {
    this.facilityName = environment.facilityName;
    this.fetchMetaData();
    this.canonical.create();
    this.meta.addTag({
      name: 'description',
      content: `${this.privacyPolicyPageContent}`
    });
    this.titleService.setTitle(`${this.privacyPolicyPageTitle}`);  }

  ngOnInit() {
    this.fetchPrivacyPlicy();
  }

  public fetchMetaData() {
    this.privacyPolicyPageTitle  = privacyPolicyPageTitle;
    this.privacyPolicyPageContent = privacyPolicyPageContent;
  }

  public fetchPrivacyPlicy() {
    this.privacyPolicy = privacyPolicy;
  }
}