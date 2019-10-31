import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner-with-modal',
  templateUrl: './spinner-with-modal.component.html',
  styleUrls: ['./spinner-with-modal.component.scss']
})
export class SpinnerWithModalComponent implements OnInit {

  @Input() message: string;
  constructor() { }

  ngOnInit() {
  }

}
