// import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit, Inject } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { faqContent, faqList } from "../data/faq";
import { CanonicalService } from "../services/canonical.service";
import { faqPageContent, faqPageTitle } from "../data/title";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"],
})
export class FaqComponent implements OnInit {
  faqContent: any;
  faqList: any;
  faqPageContent: string;
  faqPageTitle: string;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: "description",
      content: `${this.faqPageContent}`,
    });
    this.titleService.setTitle(`${this.faqPageTitle}`);
    this.canonical.create();
  }

  ngOnInit() {
    this.fetchFaqContent();
  }

  public fetchFaqContent() {
    this.faqContent = faqContent;
    this.faqList = faqList;
  }

  public fetchMetaData() {
    this.faqPageTitle = faqPageTitle;
    this.faqPageContent = faqPageContent;
  }
}
