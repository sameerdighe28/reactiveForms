import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private rows;
  private columns;
  private data;

  constructor() {
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
        'type': 'string',
        'required': true
      },
      {
        'name': 'Mobile Image Url',
        'prop': 'mobileImageUrl',
        'type': 'string',
        'required': true
      },
      {
        'name': 'Theme Id',
        'prop': 'themeId',
        'type': 'string',
        'required': false
      }];

  }


  submitForm(event) {
    this.data = event;
  }

}
