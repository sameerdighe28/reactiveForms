import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {AppService} from '../app.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  private questions;
  form: FormGroup;
  private prop: string;

  @Input() rows: any[];
  @Input() columns: any[];

  @Output() submitForm = new EventEmitter();

  constructor(private fb: FormBuilder,
              private as: AppService) {
  }

  ngOnInit() {
    this.questions = [
      {'prop': 'changeImageOptions', 'columns': this.columns, 'value': this.rows, 'controlType': 'datatable'},
      {'prop': 'imageUrls', 'columns': this.columns, 'value': ['1', '2'], 'controlType': 'list'}
    ];
    this.prop = 'changeImageOptions';
    this.form = this.toFormGroup(this.questions);
  }

  toFormGroup(questions) {
    const group: any = {};
    questions.forEach(question => {
      if (question.controlType === 'datatable') {
        group[question.prop] = this.toFormArray(question.columns, question.value, question.prop);
      } else {
        group[question.prop] = question.required ? new FormControl(question.value || '')
          : new FormControl(question.value || '');
      }
    })
    return new FormGroup(group);
  }


  toFormArray(columns: any, rows: any, prop: string) {
    const group: any = {};
    const controlsConfig: any = [];
    rows.forEach((row) => {
      columns.forEach((col) => {
        group[col.prop] = col.required
          ? new FormControl( row[col.prop] || undefined, Validators.required)
          : new FormControl( row[col.prop] || undefined);
      });
      controlsConfig.push(this.fb.group(group));
    });
    return new FormArray(controlsConfig);
  }


  get rowsArray() {
    return this.form.get(this.prop) as FormArray ;
  }

  private rowsAsArray(rows) {
    return rows as FormArray;
  }

  public onAddAnotherRowClicked() {
    const group: any = {};
    this.columns.forEach(col => {
      group[col.prop] =  col.required ? new FormControl(undefined, Validators.required) :
        new FormControl(undefined);
    });
    this.rowsAsArray(this.form.get(this.prop)).push(this.fb.group(group));
  }

  public deleteClicked(rowIndex) {
    const confirmed = confirm('Do you want to delete it ?');
    if (confirmed) {
      this.rowsAsArray(this.form.get(this.prop)).removeAt(rowIndex);
    }
  }
  public onSubmit() {
    this.submitForm.emit({'data': this.form.value, 'prop': this.prop});
  }

  public control(row, prop) { return row['controls'][prop]; }

}
