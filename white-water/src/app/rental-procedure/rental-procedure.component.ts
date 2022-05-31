import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { rentalProcedureTitle } from '../data/title';
import { rentalProcedureHeading } from '../data/heading';
import { rentalProcedure  } from '../data/rental-procedure';
import { CanonicalService } from '../services/canonical.service';


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
    private canonical: CanonicalService,
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: 'Please call the office or stop in to make sure we have a unit available for you or if someone is in the process of moving out.'

    });
    this.titleService.setTitle(`${this.rentalProcedureTitle}`);
  }

  ngOnInit() {
    // this.fetchScript();
    this.fetchHeading();
    this.fetchFaqData();
    this.canonical.create();
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
