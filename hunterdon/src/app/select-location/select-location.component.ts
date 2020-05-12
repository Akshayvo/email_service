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
      name: 'Hunterdon Storage at Ringoes',
    },
    {
      id: 1,
      name: 'Hunterdon Storage I',
    },
    {
      id: 2,
      name: 'Hunterdon Storage II',
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
