import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { rentalProcedureTitle } from '../data/title';
import { rentalProcedureHeading } from '../data/heading';
import { rentalProcedure  } from '../data/rental-procedure';

@Component({
  selector: 'app-rental-procedure',
  templateUrl: './rental-procedure.component.html',
  styleUrls: ['./rental-procedure.component.scss']
})
export class RentalProcedureComponent implements OnInit {
  rentalProcedureTitle: any;
  script: any;
  rentalProcedureHeading: string;
  rentalProcedure: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
    
    });
    this.titleService.setTitle(`${this.rentalProcedureTitle}`);
  }

  ngOnInit() {
    // this.fetchScript();
    this.fetchHeading();
    this.fetchFaqData();
  }

  public fetchMetaData () {
    this.rentalProcedureTitle = rentalProcedureTitle;
  }


  public fetchHeading() {
    this.rentalProcedureHeading = rentalProcedureHeading;
  }

  public fetchFaqData() {
    this.rentalProcedure = rentalProcedure;
  }

}
