import { Component, OnInit, Input } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
   selector: 'ng-todo__add_todo',
   templateUrl: './add-todo.component.html',
   styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
   newTodoContent: string = '';

   add(content: string): void {
      console.log(content);
   }

   getFormatContent(content: string): string {
      return content.trim();
   }

   ngOnInit(): void {
      
   }
}