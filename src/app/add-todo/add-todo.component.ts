import { Component, OnInit } from "@angular/core";

@Component({
   selector: 'ng-todo__add_todo',
   templateUrl: './add-todo.component.html',
   styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
   private newTodoContent: string = '';
   private maxContentLen: number = 50;
   private minContentLen: number = 1;

   add() {
      const content = this.getFormatContent(this.newTodoContent);

      if (this.validateContent(content)) {
         console.log(content + '|');
      }
   }

   getFormatContent(content: string): string {
      return content.trim();
   }

   validateContent(content: string): boolean {
      content = this.getFormatContent(content);

      if (content.length === 0) {
         this.errMes(`Min length: ${this.minContentLen}`);
         return false;
      }
      if (content.length > this.maxContentLen) {
         this.errMes(`Max length: ${this.maxContentLen}`);
         return false;
      }
         
      return true;
   }

   errMes(mes: string): void {
      console.error(mes);
   }

   ngOnInit(): void {
      
   }
}