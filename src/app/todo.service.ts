import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from './todo';

import { Observable, from, interval } from 'rxjs';
import { isTemplateElement } from 'babel-types';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {
    this._load();
  }

  private _todosUrl: string = 'api/todos';

  private _todos: Todo[] = [];
  
  get todos(): Todo[] {
    return this._todos;
  }

  private _load() {
    this._todos = [];
    
    this.http.get<Todo[]>(this._todosUrl).forEach((item) => {
      item.forEach(todo => { 
        this._todos.push(new Todo(todo.id, todo.content, todo.complete));
      });
    });
  }

  addTodo(content: string, complete: boolean = false): void {
    
  }
}
