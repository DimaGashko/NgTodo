import { Component } from "@angular/core";

@Component({
   selector: 'app-root',
   templateUrl: './app/app.component.html',
   styleUrls: ['./app/app.component.css']
})
export class AppComponent {
   appName: string = 'NgTodo';
   appDescription: string = 'Todo List On Angular';
}