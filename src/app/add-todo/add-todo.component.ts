import { Component, OnInit, Input } from "@angular/core";

@Component({
   selector: 'ng-todo__add_todo',
   templateUrl: './add-todo.component.html',
   styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
   newTodoContent: string = '';

   add(content?: string): void {
      if (content === void 0) content = this.newTodoContent;
      content = this.getFormatContent(this.newTodoContent);

      console.log(content);
      this.newTodoContent = '';
   }

   getFormatContent(content: string): string {
      return content.trim();
   }

   ngOnInit(): void {
      console.log(this);
   }
}