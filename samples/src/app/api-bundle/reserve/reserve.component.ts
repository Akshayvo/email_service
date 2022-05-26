import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { reservePageTitle, reservePageContent } from "../../data/title";
import { reserveUnitHeading } from "../../data/heading";

@Component({
  selector: "app-reserve",
  templateUrl: "./reserve.component.html",
  styleUrls: ["./reserve.component.scss"],
})
export class ReserveComponent implements OnInit {
  reservePageContent: string;
  reservePageTitle: string;
  reserveUnitHeading: string;

  constructor(private titleService: Title, private meta: Meta) {
    this.fetchMetaData();
    this.meta.updateTag({
      name: "description",
      content: `${this.reservePageContent}`,
    });
    this.titleService.setTitle(`${this.reservePageTitle}`);
    
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    
  }

  public fetchMetaData() {
    this.reservePageTitle = reservePageTitle;
    this.reservePageContent = reservePageContent;
  }

  public fetchReserveUnitHeading() {
    this.reserveUnitHeading = reserveUnitHeading;
  }
}
