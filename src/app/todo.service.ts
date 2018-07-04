import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from './todo';

import { Observable, from, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {
    this._load();
  }

  private _todosUrl: string = 'api/todos';
  private _todos: Observable<Todo[]>;

  private _load() {
    this._todos = this.http.get<Todo[]>(this._todosUrl)
  }

  getTodos(): Observable<Todo[]> {
    return this._todos;
  }

  addTodo(content: string, complete: boolean = false): void {
    
  }
}
