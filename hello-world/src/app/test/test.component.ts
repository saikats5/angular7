import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  //templateUrl: './test.component.html',
  template: `
    <button (click)="onClick()">BUTTON CLICK</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log("CLICK THE BUTTON");
  }

}
