import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'ng-todo__list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { 

  }

  ngOnInit() {
    this.todoService.getTodos().forEach((todo) => {
      this.todos.push(todo);
    });
  }

}
