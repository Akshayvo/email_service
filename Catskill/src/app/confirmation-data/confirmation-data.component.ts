import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-confirmation-data',
  templateUrl: './confirmation-data.component.html',
  styleUrls: ['./confirmation-data.component.scss']
})
export class ConfirmationDataComponent implements OnInit {


@Input()  reserveUnitForm: FormGroup;

@Input() submitted = false;

@Output() childEvent = new EventEmitter();

constructor() { }


addTenant(event: any) {
  this.childEvent.emit();
}


  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.reserveUnitForm.invalid) {
      return;
    } else {
      this.addTenant(this.reserveUnitForm.value);
    }
    console.log(this.reserveUnitForm.value);
  }

}
