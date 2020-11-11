import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.scss']
})
export class SelectLocationComponent implements OnInit {

  places = [
    {
      id: 0,
      name: 'Southern Self Storage - Agricola',
    },
    {
      id: 1,
      name: 'Southern Self Storage - Rocky Creek',
    },
    {
      id: 2,
      name: 'Southern Self Storage - Barton',
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
    this.messageEvent.emit(this.getLocation.value.location);
  }
}
