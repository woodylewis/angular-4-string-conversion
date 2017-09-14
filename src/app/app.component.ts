import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  record: string = APP_CONFIG.input;
  set: Array<any> = [];
  key: string;

  constructor() {}

  public ngOnInit(): void {
    let theStr: string = 'foo';
    let copies: Array<any> = [];
    this.set = this.record.split(/,()/);  
    this.set = this.set.filter((currentValue) => {
      return currentValue.length > 0; 
    })
    .map((currentValue, index, array) => {
      if(currentValue.includes(array[0])) {
        let separate: Array<any> = currentValue.split(APP_CONFIG.front);
        if (separate[0].length > 0) {
          //copies.push(separate[0]);
          copies[index] = separate[0];
          console.log(separate);
        }
        currentValue = separate[1];
      }
      return currentValue;
    }, this);
    console.log(this.set);
    copies.forEach((key, value) => {
      console.log(key + ' ' + value);
      //this.set.splice(this.set[0], 1, key);
      this.set.splice(value, 1, key);
    }, this);
    console.log(this.set);
  }
}