import { Injectable } from '@angular/core';
import { Todo } from './todo';

interface IFilter {
  url: string,
  getTodos: (todos: Todo[]) => Todo[],
}

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor() { }

  defaultType: string = 'all';

  filters: {[key: string]: IFilter}= {
    all:  {
      url: '/all',
      getTodos: function (todos: Todo[]) { 
        return todos;
      },
    },
    active: {
      url: '/active',
      getTodos: function (todos: Todo[]) { 
        return todos.filter((todo: Todo) => !todo.complete);
      },
    },
    completed: {
      url: '/completed',
      getTodos: function (todos: Todo[]) { 
        return todos.filter((todo: Todo) => todo.complete);
      },
    }

  }

}
