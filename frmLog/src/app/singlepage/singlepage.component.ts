import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { columns, chooseUser, severity, system } from '../data/columns';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.scss']
})
export class SinglepageComponent implements OnInit {

  get f() { return this.form.controls; }

  columns: any;
  chooseUser: any;
  severity: any;
  system: any;
  form: FormGroup;
  account: any;
  group: any;
  user: string;
  result: any[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.result = [];
    this.form = this.formBuilder.group({
      account: [''],
      group: [''],
      user: [''],
      from: [''],
      to: [''],
      systemGroup: ['First value'],
      severity: ['First value'],
      radioValue: ['Account User'],
      columns: new FormArray([]),
    });
  }

  ngOnInit() {
    this.fetchContact();
    this.addCheckboxes();
  }

  public fetchContact() {
    this.columns = columns;
    this.chooseUser = chooseUser;
    this.severity = severity;
    this.system = system;
  }

  onChange(e: any) {
    const currentColumn = e.target.value;
    const currentColumnIndex = this.columns.map(column => column.name).indexOf(currentColumn);
    if (this.form.value.columns[currentColumnIndex]) {
      this.result = [...this.result, currentColumn];
    } else {
      this.result = this.result.filter(column => column !== currentColumn);
    }
  }

  onSubmit() {
    const body = {
      account: this.form.value.account,
      user: this.form.value.user,
      group: this.form.value.group,
      radioValue: this.form.value.radioValue,
      from: this.form.value.from,
      to: this.form.value.to,
      severity: this.form.value.severity,
      systemGroup: this.form.value.systemGroup,
      columns: this.form.value.columns
        .map((v, i) => v ? this.columns[i].name : null)
        .filter(v => v !== null)
    };
  }

  private addCheckboxes() {
    this.columns.map((o, i) => {
      const control = new FormControl(); // if first item set to true, else false
      (this.form.controls.columns as FormArray).push(control);
    });
  }


}

