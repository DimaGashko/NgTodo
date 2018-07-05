export interface IObjTodo {
   id: string;
   content: string;
   complete: boolean;
}

export class Todo {
   
   constructor(
      public id: string,
      public content: string,
      public complete: boolean)
   {
      this.correct();      
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