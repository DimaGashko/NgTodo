import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo, IObjTodo } from './todo';

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
    
    this.http.get<IObjTodo[]>(this._todosUrl).forEach((item) => {
      item.forEach(todo => { 
        this._todos.push(new Todo(todo));
      });
    });
  }

  addTodo(content: string, complete: boolean = false): void {
    
  }
}
