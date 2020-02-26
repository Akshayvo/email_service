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
      name: 'Affordable Storage - 260 N Grove St',
    },
    {
      id: 1,
      name: 'Affordable Storage - 201 N Grove St',
    },
    {
      id: 2,
      name: 'Affordable Storage - 246 West South Lane',
    },
    {
      id: 2,
      name: 'Affordable Storage - 817 South Getty Street',
    },
    {
      id: 2,
      name: 'Affordable Storage - 430 South Highway 83',
    },
    {
      id: 2,
      name: 'Affordable Storage - 500 East Garden Street',
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
