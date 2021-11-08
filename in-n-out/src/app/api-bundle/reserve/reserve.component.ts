import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CanonicalService } from "../../services/canonical.service";
import {
  headingMoveInPageLocation1,
  headingMoveInPageLocation2,
  headingMoveInPageLocation3,
  headingMoveInPageLocation4,
  headingMoveInPageLocation5,
  headingReservePageLocation1,
  headingReservePageLocation2,
  headingReservePageLocation3,
  headingReservePageLocation4,
  headingReservePageLocation5,
  headingReservePageLocation6,
} from "../../data/location";
import { DataSharingService } from "../services/data-sharing.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-reserve",
  templateUrl: "./reserve.component.html",
  styleUrls: ["./reserve.component.scss"],
})
export class ReserveComponent implements OnInit {
  id: number;
  tabs: any;
  navTo: any;
  heading: string;

  constructor(
    private router: Router,
    private dataSharingService: DataSharingService,
    private canonical: CanonicalService
  ) {
    this.canonical.create();
  }

  ngOnInit() {
    // console.log(this.router.url);
    this.isSomePage();
    this.navigate();
  }

  public isSomePage() {
    if (this.router.url.includes(`${environment.locationName}/commerce-st`)) {
      this.id = 1;
      if (this.router.url.includes("/commerce-st/move-in")) {
        this.heading = headingMoveInPageLocation1;
      } else {
        this.heading = headingReservePageLocation1;
      }
    } else if (
      this.router.url.includes(`${environment.locationName}/pleasantview`)
    ) {
      this.id = 2;
      if (this.router.url.includes("/pleasantview/move-in")) {
        this.heading = headingMoveInPageLocation2;
      } else {
        this.heading = headingReservePageLocation2;
      }
    } else if (
      this.router.url.includes(`${environment.locationName}/clifford-north`)
    ) {
      this.id = 3;
      if (this.router.url.includes("/clifford-north/move-in")) {
        this.heading = headingMoveInPageLocation3;
      } else {
        this.heading = headingReservePageLocation3;
      }
    } else if (
      this.router.url.includes(`${environment.locationName}/clifford-south`)
    ) {
      this.id = 4;
      if (this.router.url.includes("/clifford-south/move-in")) {
        this.heading = headingMoveInPageLocation4;
      } else {
        this.heading = headingReservePageLocation4;
      }
    } else if (
      this.router.url.includes(`${environment.locationName}/woodland`)
    ) {
      this.id = 5;
      if (this.router.url.includes("/woodland/move-in")) {
        this.heading = headingMoveInPageLocation5;
      } else {
        this.heading = headingReservePageLocation5;
      }
    } 
    // else if (
    //   this.router.url.includes(`${environment.locationName}/robertsdale`)
    // ) {
    //   this.id = 6;
    //   this.heading = headingReservePageLocation6;
    // }
  }

  public navigate() {
    // Base location of the facility will be appended to URL
    this.navTo = this.router.url;
    this.dataSharingService.navigationTo = this.navTo;
    this.dataSharingService.navigateToPrevious = this.navTo;
    this.dataSharingService.updateMyNavLink(
      "viewRates",
      "next",
      `${this.navTo}/${location}`
    );
    this.dataSharingService.updateMyNavLink(
      "viewRates",
      "prev",
      `${this.router.url}`
    );
    const myNavLinks = this.dataSharingService.getMyNavLinks("viewRates");
  }
}
