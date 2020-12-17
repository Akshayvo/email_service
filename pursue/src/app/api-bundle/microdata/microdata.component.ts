import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LstUnitTypes } from '../models/unittypes';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-microdata',
  templateUrl: './microdata.component.html',
  styleUrls: ['./microdata.component.scss']
})
export class MicrodataComponent implements OnInit {

  lstUnitTypes: LstUnitTypes[];
  private getDataSubscribe$: Subscription;

  constructor(
    private fetchDataService: FetchDataService,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.getDataSubscribe$ = this.fetchDataService.getData( )
      .subscribe(unitTypesResponse => {
        this.lstUnitTypes = unitTypesResponse.lstUnitTypes;
      });
    }
  
    public ngOnDestroy(): void {
      if (this.getDataSubscribe$ && this.getDataSubscribe$.closed) {
        this.getDataSubscribe$.unsubscribe();
      }
    }
  }
