import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { APP_CONFIG } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputRecord: string = APP_CONFIG.input;
  set: Array<any> = [];
  key: string;
  sorted: Boolean = false;

  constructor() {}

  public ngOnInit(): void {
    this.buildOutput();
  }

  public buildOutput() {
    let copiesToInsert: Array<any> = [];
    this.set = this.inputRecord.split(/,()/);  
    this.set = this.set.filter((currentValue) => {
      return currentValue.length > 0; 
    })
    .map((currentValue, index, array) => {
      if(currentValue.endsWith(APP_CONFIG.closeSeparator)) {
        currentValue = currentValue.slice(0, currentValue.length - 1);
      }
      if(currentValue.includes(array[0])) {
        let separatedElements: Array<any> = currentValue.split(APP_CONFIG.openSeparator);
        if (separatedElements[0].length > 0) {
          copiesToInsert[index] = separatedElements[0];
        }
        currentValue = separatedElements[1];
      }
      return currentValue.trim();
    });

    copiesToInsert.forEach((key, value) => {
      this.set.splice(key === 'employee' ? 
                        APP_CONFIG.unsortedEmployeeIndex : 
                        APP_CONFIG.unsortedEmployeeTypeIndex, 0, key);
    }, this);

    this.formatOutput();
  }

  private formatOutput() {
    this.set = this.set.map((currentValue, index) => {
      switch (index) {
        case 3 :
        case 4 :
        case 5 :
        case 7 :
          return  '- ' + currentValue;
        case 6 :
        return  '-- ' + currentValue;
      }
      return currentValue;
    });
  }

  public sort() {
    this.set.sort();
    let temp1 = this.set.filter((currentValue) => {
      return currentValue.includes('-');
    });
    let temp2 = this.set.slice(this.set.indexOf("created"), this.set.length);
    temp2.splice(temp2.indexOf("employee") + 1, 0, temp1[0], temp1[4]);
    temp2.splice(temp2.indexOf("-- id") + 1, 0, temp1[1], temp1[2], temp1[3]);
    this.set = temp2;
    this.sorted = true;
  }
}