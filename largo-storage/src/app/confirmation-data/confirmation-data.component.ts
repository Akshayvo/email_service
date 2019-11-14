import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-confirmation-data',
  templateUrl: './confirmation-data.component.html',
  styleUrls: ['./confirmation-data.component.scss']
})
export class ConfirmationDataComponent implements OnInit {


@Input()  reserveUnitForm: FormGroup;

@Input() submitted = false;

@Output() childEvent = new EventEmitter();

@Input() showConfirmation = false;

@Input() option: any;

@Input() TotalChargesAmount: number;

@Input() TotalTaxAmount: number;

index: string;

stateString: string;
MoveInString: string;

constructor(
  private datePipe: DatePipe,

) { }


addTenant(event: any) {
  this.childEvent.emit();

}


  ngOnInit() {
    this.index = this.option.findIndex(x => x.id === this.reserveUnitForm.value.objTenant.State);
    this.stateString = this.option[this.index].description;
    this.MoveInString = this.datePipe.transform(this.reserveUnitForm.value.dteMoveIn, 'yyyy-MM-dd');
  }

  onSubmit() {
    this.submitted = true;
    // this.showConfirmation = true;
    if (this.reserveUnitForm.invalid) {
      console.log('error from confirmation');

      return;
    } else {
      this.addTenant(this.reserveUnitForm.value);
      console.log('add tenanat worked from confirmation');
    }
    console.log(this.reserveUnitForm.value);
  }

}
