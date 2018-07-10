import { Component } from "@angular/core";
import { TodoService } from "../todo.service";

@Component({
   selector: 'ng-todo',
   templateUrl: './ng-todo.component.html',
   styleUrls: ['./ng-todo.component.css']
})
export class NgTodoComponent {
   constructor(private todoService: TodoService) {
      
   }

   
}