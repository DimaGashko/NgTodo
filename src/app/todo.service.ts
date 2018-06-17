import { Injectable } from '@angular/core';

import { todos } from './todos';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  getTodos(): Todo[] {
    return todos;
  }

  addTodo(content: string, complete: boolean = false): void {
    todos.push({
      content,
      complete
    })
  }

  constructor() { }
}
