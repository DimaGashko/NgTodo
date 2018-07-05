export interface IObjTodo {
   id: string;
   content: string;
   complete: boolean;
}

export class Todo {
   id: string;
   content: string;
   complete: boolean;
   
   constructor(todoObj: IObjTodo) {
      this.id = (todoObj.id !== void 0) ?
         todoObj.id : this.getRandomId();
      
      this.content = todoObj.content;
      this.complete = todoObj.complete;     
   }

   private correct() {
      if (this.id === void 0) {
         this.id = this.getRandomId();
      }
   }

   private getRandomId() {
      return '_' + Math.random().toString(36).slice(-9);
   }

}