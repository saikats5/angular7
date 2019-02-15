import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  //templateUrl: './test.component.html',
  template: `
    <button (click)="onClick($event)">BUTTON CLICK</button>
    <button (click)="greeting='Hello Saikat'">BUTTON CLICK</button>
    {{greeting}}
    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)">Log</button>
    <input [(ngModel)]="name" type="text">
    {{name}}

    <h2 *ngIf="displayName; else elseBlock">
      IFCODEVISIBLE
    </h2>
    <ng-template #elseBlock>
      <h2>Conditional container</h2>
    </ng-template>


    <div *ngIf="displayname; then thenBlock; else elseBlocks"></div>
    <ng-template #thenBlock>
      <h2>1111</h2>
    </ng-template>
    <ng-template #elseBlocks>
      <h2>2222</h2>
    </ng-template>


    <div [ngSwitch]="color">
      <div *ngSwitchCase="blue">BLUE</div>
      <div *ngSwitchCase="yellow">YELLOW</div>
      <div *ngSwitchCase="pink">PINK</div>
      <div *ngSwitchDefault>PICK COLOR</div>
    </div>


    <div *ngFor="let color of colors; index as i; first as f; last as l; odd as o; even as e;">
      <h2>{{i}} {{f}} {{l}} {{o}} {{e}} {{color}}</h2>
    </div>

    <h2>{{"Hello " + parentData}}</h2>
    <button (click)="fireEvent()">Send Event to parent</button>

    
    <div *ngFor="let detail of myDetails">MY DETAILS FROM SERVICES --- {{detail.id}} --- {{detail.name}}</div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  displayname = false;
  public color = "blue";
  public greeting = "";
  public colors = ['green', 'orange', 'yellow', 'pink', 'purple', 'violet'];

  public myDetails = [];

  @Input() public parentData;
  // @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit('Hey child to parent event...');
  }

  constructor(private _getDetailData: TestService) { }

  ngOnInit() {
    //this.myDetails = this._getDetailData.getDetails();
    this._getDetailData.getDetails()
      .subscribe(data => {this.myDetails = data; console.log("1111111111111111",this.myDetails);});
  }

  onClick(event){
    console.log("CLICK THE BUTTON");
    console.log("Event Log",event);
    this.greeting = "Changing on Click";
  }

  logMessage(value){
    console.log("INPUT VALUE",value);
  }

}
