import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.scss']
})
export class SelectLocationComponent implements OnInit {

  places = [
    {
      id: 0,
      name: 'AFFORDABLE STORAGE #1 - 260 N GROVE',
    },
    {
      id: 1,
      name: 'AFFORDABLE STORAGE #2 - 201 N GROVE',
    },
    {
      id: 2,
      name: 'AFFORDABLE STORAGE #3 - 246 W. SOUTH LANE',
    },
    {
      id: 2,
      name: 'AFFORDABLE STORAGE #4 - 817 S. GETTY',
    },
    {
      id: 2,
      name: 'AFFORDABLE STORAGE #5 - 430 S HWY 83',
    },
    {
      id: 2,
      name: 'AFFORDABLE STORAGE #6 - 500 E. GARDEN',
    },
 ];

 getLocation: FormGroup;

 @Output() messageEvent = new EventEmitter<string>();


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getLocation = this.formBuilder.group({
      location: ['0'],
  });
  this.sendMessage();
  }

  sendMessage() {
  // console.log(this.getLocation.value.location);
    this.messageEvent.emit(this.getLocation.value.location);
  }
}
