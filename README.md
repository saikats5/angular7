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
    "anotherClass":
}

[ngClass]="messageClasses"

Event Binding

Template -> Event Binding -> Class
Class -> Data Binding -> Template