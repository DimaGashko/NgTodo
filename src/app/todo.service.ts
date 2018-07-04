import { Injectable } from '@angular/core';

import { todos } from './todos';
import { Todo } from './todo';

import { Observable, from, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todos: Observable<Todo>;

  getTodos(): Observable<Todo> {
    this._todos = from(todos).pipe();
    return this._todos;
  }

  addTodo(content: string, complete: boolean = false): void {
    todos.push({
      content,
      complete
    })
  }

  constructor() { }
}
