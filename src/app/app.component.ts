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

    constructor(private fb: FormBuilder){
	    this.rows =  [
		    {
		      "imageUrl": "https://www.cfacdn.com/img/Spotlight/Events/BingoBalls_blue.jpg",
		      "mobileImageUrl": "https://www.cfacdn.com/img/Spotlight/Events/BingoBalls_blue.jpg"
		    },
		    {
		      "imageUrl": "https://www.cfacdn.com/img/Spotlight/Events/BingoBalls_pink.jpg",
		      "mobileImageUrl": "https://www.cfacdn.com/img/Spotlight/Events/BingoBalls_pink.jpg"
		    },
		    {
		      "imageUrl": "https://www.cfacdn.com/img/Spotlight/Events/BingoBalls_yellow.jpg",
		      "mobileImageUrl": "https://www.cfacdn.com/img/Spotlight/Events/BingoBalls_yellow.jpg"
		    },
		    {
		      "imageUrl": "https://www.cfacdn.com/img/Spotlight/Events/BingoCard_blue.jpg",
		      "mobileImageUrl": "https://www.cfacdn.com/img/Spotlight/Events/BingoCard_blue.jpg"
		    },
		    {
		      "imageUrl": "https://www.cfacdn.com/img/Spotlight/Events/BingoCard_pink.jpg",
		      "mobileImageUrl": "https://www.cfacdn.com/img/Spotlight/Events/BingoCard_pink.jpg"
		    },
		    {
		      "imageUrl": "https://www.cfacdn.com/img/Spotlight/Events/BingoCard_yellow.jpg",
		      "mobileImageUrl": "https://www.cfacdn.com/img/Spotlight/Events/BingoCard_yellow.jpg"
		    }
		];


		this.columns = [
	        {
	          "name": "Image Url",
	          "prop": "imageUrl",
	          "type": "string"
	        },
	        {
	          "name": "Mobile Image Url",
	          "prop": "mobileImageUrl",
	          "type": "string"
	        },
	        {
	          "name": "Theme Id",
	          "prop": "themeId",
	          "type": "string"
	        }
	    ]
    }

    ngOnInit(){

    	this.form = this.fb.group({
    		rowsArray: this.fb.array([])
  		});

  		this.rowsArray = this.form.get("rowsArray") as FormArray;

    	this.rowsArray = this.toDatatableFormGroup(this.columns,this.rows);
    	console.log(this.rowsArray);

    }

    toDatatableFormGroup(columns: any, rows: any) {
	    let group: any = {};
	    let rowsArray = new FormArray([]);

	    rows.forEach((row) => {
	      columns.forEach((col) => {
	        group[col.prop] =  new FormControl(row[col.prop] || '');
	      });
	      rowsArray.push(new FormGroup(group));
	    });
	    return rowsArray;
	}

	private pushEmptyRow() {
      let group: any = {};
      this.columns.forEach(col => { 
      	group[col.prop] =  new FormControl(undefined || '');
      });
      this.rowsArray.push(new FormGroup(group));

    }

    public deleteClicked(rowIndex) {
      let confirmed = confirm('Do you want to delete it ?');
      if(confirmed){
        this.rows.splice(rowIndex,1);
      }
    }

	onSubmit() {
   	  console.log(this.rowsArray.value);  
    }

    getControlName(prop,rIdx,cIdx){
    	return prop+rIdx+cIdx;
    }
}
