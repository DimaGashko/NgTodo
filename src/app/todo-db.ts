import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo';

export class httpData implements InMemoryDbService {
   createDb() {
      return [
         {content: 'Bread', complete: true},
         {content: 'Water', complete: true},
         {content: 'Notebook', complete: false},
         {content: 'Paper', complete: false},
      ];

   }
}