import { Injectable } from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private fb: FormBuilder) { }
  rows: FormArray;

  public toDatatableFormGroup(columns: any, rows: any) {
    const group: any = {};
    rows.forEach((row) => {
      columns.forEach((col) => {
        group[col.prop] =  row[col.prop] || undefined;
      });
      this.rows.push(this.fb.group(group))
      return this.rows;
    });
  }
}
