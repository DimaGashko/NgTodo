import { Component, OnInit } from "@angular/core";

@Component({
   selector: 'ng-todo__add_todo',
   templateUrl: './add-todo.component.html',
   styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
   add(content: string) {
      console.log(content);
   }

   ngOnInit(): void {
      
   }
}