import { InMemoryDbService } from 'angular-in-memory-web-api';

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

function getRandomId() {
   return '_' + Math.random().toString(36).slice(-9);
}