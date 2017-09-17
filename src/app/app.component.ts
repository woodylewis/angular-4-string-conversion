import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { APP_CONFIG } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //-- initialize the input --
  inputRecord: string = APP_CONFIG.input;
  set: Array<any> = [];
  key: string;
  sorted: Boolean = false;
  wasReset: Boolean = false;

  constructor() {}

  public ngOnInit(): void {
    this.buildOutput();
  }

  public buildOutput() {
    let copiesToInsert: Array<any> = [];
    //-- Create the first version of the array of separate values --
    this.set = this.inputRecord.split(/,()/);  
    //-- Remove the empty strings created by the split --
    this.set = this.set.filter((currentValue) => {
      return currentValue.length > 0; 
    })
    //-- Remove the separators --
    .map((currentValue, index, array) => {
      if(currentValue.endsWith(APP_CONFIG.closeSeparator)) {
        currentValue = currentValue.slice(0, currentValue.length - 1);
      }
      //-- Store the 'id' string to copy into duplicates --
      if(currentValue.includes(array[0])) {
        let separatedElements: Array<any> = currentValue.split(APP_CONFIG.openSeparator);
        if (separatedElements[0].length > 0) {
          copiesToInsert[index] = separatedElements[0];
        }
        currentValue = separatedElements[1];
      }
      return currentValue.trim();
    });
    //-- Insert the 'employee' and 'employeeType' strings in the right place --
    copiesToInsert.forEach((key, value) => {
      this.set.splice(key === 'employee' ? 
                        APP_CONFIG.unsortedEmployeeIndex : 
                        APP_CONFIG.unsortedEmployeeTypeIndex, 0, key);
    }, this);

    this.formatOutput();
  }

  private formatOutput() {
    //-- Add the leading '-'s where necessary --
    this.set = this.set.map((currentValue, index) => {
      switch (index) {
        case APP_CONFIG.unsortedFirstIdIndex :
        case APP_CONFIG.unsortedFirstNameIndex :
        case APP_CONFIG.unsortedSecondIdIndex :
        case APP_CONFIG.unsortedLastNameIndex :
          return  '- ' + currentValue;
        case APP_CONFIG.unsortedThirdIdIndex :
        return  '-- ' + currentValue;
      }
      return currentValue;
    });
  }

  public sort() {
    //-- Standard array sort --
    this.set.sort();
    //-- Copy the strings with leading '-' --
    let temp1 = this.set.filter((currentValue) => {
      return currentValue.includes('-');
    });
    //-- Copy the 'employee' and '--id' strings --
    let temp2 = this.set.slice(this.set.indexOf("created"), this.set.length);
    temp2.splice(temp2.indexOf("employee") + 1, 0, temp1[0], temp1[4]);
    temp2.splice(temp2.indexOf("-- id") + 1, 0, temp1[1], temp1[2], temp1[3]);
    //-- Copy the modified sort to the master array --
    this.set = temp2;
    this.sorted = true;
    this.wasReset = false;
  }

  public reset() {
    this.buildOutput();
    this.wasReset = true;
    this.sorted = false;
  }
}