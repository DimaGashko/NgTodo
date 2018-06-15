import { Component } from "@angular/core";

@Component({
   selector: 'ng-todo',
   templateUrl: './ng-todo.component.html',
   styleUrls: ['./ng-todo.component.css']
})
export class NgTodoComponent {
   appName: string = 'NgTodo';
   appDescription: string = 'Todo List On Angular';
}