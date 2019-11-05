import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private rows;
  private columns;
  form: FormGroup;
  rowsArray: FormArray;

    constructor(private fb: FormBuilder) {
      this.rows =  [
        {
          'imageUrl': 'https://www.cfacdn.com/img/Spotlight/Events/BingoBalls_blue.jpg',
          'mobileImageUrl': 'https://www.cfacdn.com/img/Spotlight/Events/BingoBalls_blue.jpg',
          'themeId': 'abc'
        },
        {
          'imageUrl': 'https://www.cfacdn.com/img/Spotlight/Events/BingoBalls_pink.jpg',
          'mobileImageUrl': 'https://www.cfacdn.com/img/Spotlight/Events/BingoBalls_pink.jpg',
          'themeId': 'xyz'
        },
        {
          'imageUrl': 'https://www.cfacdn.com/img/Spotlight/Events/BingoBalls_yellow.jpg',
          'mobileImageUrl': 'https://www.cfacdn.com/img/Spotlight/Events/BingoBalls_yellow.jpg'
        },
        {
          'imageUrl': 'https://www.cfacdn.com/img/Spotlight/Events/BingoCard_blue.jpg',
          'mobileImageUrl': 'https://www.cfacdn.com/img/Spotlight/Events/BingoCard_blue.jpg'
        },
        {
          'imageUrl': 'https://www.cfacdn.com/img/Spotlight/Events/BingoCard_pink.jpg',
          'mobileImageUrl': 'https://www.cfacdn.com/img/Spotlight/Events/BingoCard_pink.jpg'
        },
        {
          'imageUrl': 'https://www.cfacdn.com/img/Spotlight/Events/BingoCard_yellow.jpg',
          'mobileImageUrl': 'https://www.cfacdn.com/img/Spotlight/Events/BingoCard_yellow.jpg'
        }];

      this.columns = [
        {
          'name': 'Image Url',
          'prop': 'imageUrl',
          'type': 'string'
        },
        {
          'name': 'Mobile Image Url',
          'prop': 'mobileImageUrl',
          'type': 'string'
        },
        {
          'name': 'Theme Id',
          'prop': 'themeId',
          'type': 'string'
        }];
    }

    ngOnInit() {
      this.form = this.fb.group({
        rows: this.fb.array([])});

      this.toDatatableFormGroup(this.columns, this.rows);
      console.log(this.rowsFormControls);

    }

    get rowsFormControls() {
      return this.form.get('rows') as FormArray;
    }

    toDatatableFormGroup(columns: any, rows: any) {
      const group: any = {};
      rows.forEach((row) => {
        columns.forEach((col) => {
          group[col.prop] =  row[col.prop] || undefined;
        });
        this.rowsFormControls.push(this.fb.group(group));
      });
    }
    private pushEmptyRow() {
      const group: any = {};
      this.columns.forEach(col => {
        group[col.prop] =  undefined;
      });
      this.rowsFormControls.push(this.fb.group(group));
    }

    public deleteClicked(rowIndex) {
      const confirmed = confirm('Do you want to delete it ?');
      if (confirmed) {
        this.rowsFormControls.removeAt(rowIndex);
      }
    }
    onSubmit() {
      console.log(this.form.value);
    }
}
