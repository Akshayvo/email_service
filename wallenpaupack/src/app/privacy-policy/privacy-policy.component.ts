import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { privacyPolicy } from '../data/privacy-policy';
import { CanonicalService } from '../services/canonical.service';



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
    private meta: Meta,
    private canonical: CanonicalService

  ) {
    this.canonical.create();
    this.meta.addTag({
      name: 'description',
      content: `This page contains this website's privacy policy. For more information, please contact the business directly.`
    });
<<<<<<< HEAD
    this.titleService.setTitle('Privacy Policy | Wallenpaupack Self Storage');
=======
    this.titleService.setTitle('Privacy Policy | Storage Plus of Baldwin County');
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
  }

  ngOnInit() {
    this.fetchPrivacyPlicy();
  }

  public fetchPrivacyPlicy() {
    this.privacyPolicy = privacyPolicy;
  }
}
