import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Todo } from './todo';
import { Observable } from 'rxjs';

const PREFIX = 'ng-todo-todos'

const DEFTodo: Todo = {
   id: '0',
   content: 'Item',
   complete: false,
}

const defaultTodos: Todo[] = [
   {id: '1', content: 'Bread', complete: true},
   {id: '2', content: 'Water', complete: true},
   {id: '3', content: 'Notebook', complete: false},
   {id: '4', content: 'Paper', complete: false},
];

export class httpData implements InMemoryDbService {
   createDb() {
      let todos: Todo[] = [];

      if (PREFIX in localStorage) {
         const jsonTodos = localStorage[PREFIX];
         todos = parseJsonTodos(jsonTodos);
      } else {
         todos = defaultTodos;
      }
      
      return { todos: todos };
   }

   post() { 
      console.log(arguments)
   }

}

function parseJsonTodos(jsonTodos) {
   try {
      const todos: Todo[] = JSON.parse(jsonTodos);

      return getCorrectTodos(todos);

   } catch (err) {
      console.error(err);
      return defaultTodos;
   }

}

function getCorrectTodos(todos: Todo[]): Todo[] { 
   return todos.map(todo => {
      return Object.assign({}, DEFTodo, todo);
   });
}

function getRandomId() {
   return '_' + Math.random().toString(36).slice(-9);
}