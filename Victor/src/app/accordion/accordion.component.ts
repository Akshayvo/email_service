import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  
  show: boolean = false;
  aData: any;
  @Input('accordianData') accordianData;

  constructor() { }

  ngOnInit() {
    this.fetchaccordianData();
  }


  toggleCollapse(): void {
    this.show = !this.show;
  }

  /**
   * fetchaccordianData
   */
  public fetchaccordianData() {
    this.aData = this.accordianData;
  }
}
