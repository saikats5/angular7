import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  displayname = false;
  public color = "blue";
  public greeting = "";
  public colors = ['green', 'orange', 'yellow', 'pink', 'purple', 'violet'];

  @Input() public parentData;
  // @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit('Hey child to parent event...');
  }

  constructor() { }

  ngOnInit() {
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
