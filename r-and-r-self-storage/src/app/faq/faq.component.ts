import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { faqPageTitle } from '../data/title';
import { faqHeading } from '../data/heading';
import { faq } from '../data/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqPageTitle: any;
  script: any;
  faqHeading: string;
  faq: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      // content: `${this.faqPagecontent}`
    });
    this.titleService.setTitle(`${this.faqPageTitle}`);
  }

  ngOnInit() {
    // this.fetchScript();
    this.fetchHeading();
    this.fetchFaqData();
  }

  public fetchMetaData () {
    this.faqPageTitle = faqPageTitle;
  }

  // public fetchScript() {
  //   this.script = faqScript;
  // }

  public fetchHeading() {
    this.faqHeading = faqHeading;
  }

  public fetchFaqData() {
    this.faq = faq;
  }
}
