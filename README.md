# angular7

npm install -g @angular/cli
ng new my-first-app
cd my-first-app
ng serve

ng -v to check the version

Angular app - one or more modules
Module - one or more components and services
Componenets - HTML + class(code that supports the html/view using typescript, data proprties and methods to control the view) + metadata(information decide the whether the particular class is a component or regular class, defined using decorator(function))
Services - Business logic
Modules interact and ultimately render the view in the browser

main.ts is the entry point to the angular application

ng g c test
ng generate component test

window obj is not accessible from template

inspect element and $0.getAttribute('value') //saikat //input element
$0.value //saikat //input element

Attribute - HTML
Properties - DOM
Attributes initialize DOM properties and then they are done. Attribute values cannot change once they are initialized
Property values can change

property binding can take boolean values while interpolation can take only string

disabled is by default false but when we add disabled it becomes true even if we add disabled="false" it doesn't work even disabled="{{false}}"(interpolation) doestn't work, [disabled]="false"/bind-disabled="false"

[class] = "testClass" //public testClass = "text-success"; //class binding

class binding overrides class attribute
[class.testClass]="isTrue"; //public isTrue = true;

public messageClasses = {
    "testClass": true,
    "anotherClass": false
}

[ngClass]="messageClasses"

Event Binding

Template -> Event Binding -> Class
Class -> Data Binding -> Template

#myInput inside template to bind it to method --> template reference variable //logs the whole element i.e., <input type="text">

2-way binding
  <input [(ngModel)]="name" type="text">[] for property binding-class to view, and () for event binding-view to class
    {{name}}
    ngModel is part of FormsModule so we have to import it separately

<ng-template> is a container for other elements

Structural Directives - ngIf(*ngIf="true"), false will remove the element from DOM(different from display:none as we can still see the element in the DOM)

[ngSwitch]="color"

*ngFor=""

parent component -> @Input() -> child component
child component -> @Output() -> parent component
import input./output from angular core


String
{{name | lowercase}} //saikat
{{name | uppercase}} //SAIKAT
{{name | titlecase}} //Saikat Saha
{{name | slice:3:5}} //ka
{{name | json}} {name: 'Saikat', surname: 'Saha'}

Number
{{5.678 | number:'1.2-3'}} //5.678
{{5.678 | number:'3.4-5'}} //005.6780
{{5.678 | number:'3.1-2'}} //005.68

{{0.25 | percent}} //25%
{{0.25 | currency}} //$0.25
{{0.25 | currency: 'GBP'}} //L0.25
{{0.25 | currency: 'GBP': 'code'}} //GBP0.25

{{date | date: 'short'}}
{{date | date: 'shortDate'}}
{{date | date: 'shortTime'}}
