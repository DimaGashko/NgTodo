import { Component } from "@angular/core";
import { TodoService } from "../todo.service";
import { Observable } from "rxjs";
import { Todo } from "../todo";

@Component({
   selector: 'ng-todo',
   templateUrl: './ng-todo.component.html',
   styleUrls: ['./ng-todo.component.css']
})
export class NgTodoComponent {
   constructor(private todoService: TodoService) {
      
   }

   get todos(): Observable<Todo[]> {
      return this.todoService.todos;
   }
}