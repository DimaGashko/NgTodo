import { Component, OnInit, Input } from "@angular/core";

import { Todo } from '../todo'

@Component({
   selector: 'ng-todo__todo',
   templateUrl: './todo.component.html',
   styleUrls: ['./todo.component.css'],
   host: {'class': 'todo'}
})
export class TodoComponent implements OnInit {
   @Input() todo: Todo;

   ngOnInit() {
      
   }
}