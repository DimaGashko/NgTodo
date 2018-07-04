import { InMemoryDbService } from 'angular-in-memory-web-api';

interface ITodo {
   id: string;
   content: string;
   complete: boolean;
}

const PREFIX = 'ng-todo-todos'

const DEFTodo: ITodo = {
   id: '0',
   content: 'Item',
   complete: false,
}

const defaultTodos: ITodo[] = [
   {id: '1', content: 'Bread', complete: true},
   {id: '2', content: 'Water', complete: true},
   {id: '3', content: 'Notebook', complete: false},
   {id: '4', content: 'Paper', complete: false},
];

export class httpData implements InMemoryDbService {
   createDb() {
      if (PREFIX in localStorage) {
         const jsonTodos = localStorage[PREFIX];
         return parseJsonTodos(jsonTodos);
      }
   
      return defaultTodos;
   }
}

function parseJsonTodos(jsonTodos) {
   try {
      const todos: ITodo[] = JSON.parse(jsonTodos);

      return getCorrectTodos(todos);

   } catch (err) {
      console.error(err);
      return defaultTodos;
   }

}

function getCorrectTodos(todos: ITodo[]): ITodo[] { 
   return todos.map(todo => {
      return Object.assign({}, DEFTodo, todo);
   });
}

function getRandomId() {
   return '_' + Math.random().toString(36).slice(-9);
}