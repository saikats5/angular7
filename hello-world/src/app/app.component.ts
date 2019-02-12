import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	//selector: '.app-root',//class
	//selector: '[app-root]', //attribute
	//templateUrl: './app.component.html',
	template: `<div>{{name}} - 
	{{greetUser()}} - 
	<input [id]="myId" type="text" value="Saikat"> - 
	<input id="{{myId}}" type="text" value="Saikat">

	
	</div><app-test></app-test> `,
	//styleUrls: ['./app.component.css']
	styles: [`
				div { color : orange}
				.text-success { color: green }
				.text-danger { color: red }
				.text-special { font-style: italic }	
			`]
})
export class AppComponent {
	public name = "Saikat Saha";
	public myId = "testId";
	title = 'hello-world';
	greetUser(){
		return "Hello " + this.name;
	}
}
