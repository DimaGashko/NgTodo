import { Injectable } from '@angular/core';

import { todos } from './todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  getTodos() {
    return todos;
  }

  constructor() { }
}
