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

  //constructor(public input: string) {
  constructor() {
  }

  public ngOnInit(): void {
    this.set = this.record.split(/,()/);  
    this.set = this.set.filter((currentValue) => {
      return currentValue.length > 0; 
    })
    .map((currentValue) => {
      let theStr: string = currentValue;
      return currentValue + ' ' + 'foo';
    }, this);
    console.log(this.set);
  }
}