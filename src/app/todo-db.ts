import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { IObjTodo } from './todo';

const PREFIX = 'ng-todo-todos'

const defaultTodos: IObjTodo[] = [
   {id: '1', content: 'Bread', complete: true},
   {id: '2', content: 'Water', complete: true},
   {id: '3', content: 'Notebook', complete: false},
   {id: '4', content: 'Paper', complete: false},
];

export class httpData implements InMemoryDbService {
   createDb() {
      let todos: IObjTodo[] = [];

      if (PREFIX in localStorage) {
         const jsonTodos = localStorage[PREFIX];
         todos = parseJsonTodos(jsonTodos);
      } else {
         todos = defaultTodos;
      }
      
      return { todos };
   }

}

function parseJsonTodos(jsonTodos) {
   try {
      return JSON.parse(jsonTodos);

   } catch (err) {
      console.error(err);
      return defaultTodos;
   }

}