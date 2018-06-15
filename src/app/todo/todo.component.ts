import { Component, OnInit } from "@angular/core";

@Component({
   selector: 'ng-todo__todo',
   templateUrl: './todo.component.html',
   styleUrls: ['./todo.component.css'],
   host: {'class': 'todo'}
})
export class TodoComponent implements OnInit{
   ngOnInit() {

   }
}