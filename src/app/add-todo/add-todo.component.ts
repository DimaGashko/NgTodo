import { Component, OnInit, Input } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
   selector: 'ng-todo__add_todo',
   templateUrl: './add-todo.component.html',
   styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
   newTodoContent: string = '';

   /**
    * Запрос на добавление задачи
    * (добавляет задачу только когда данные валидны)
    * 
    * @param {NgForm} ngForm
    * @returns void 
    */
   addRequest(ngForm: NgForm): void {
      const content = this.getFormatContent(this.newTodoContent);

      if (ngForm.invalid || content === '') {
         return;
      }

      this.add(this.newTodoContent);
      ngForm.reset();
   }

   add(content: string): void {
      content = this.getFormatContent(this.newTodoContent);

      console.log(content);
      this.newTodoContent = '';
   }

   getFormatContent(content: string): string {
      return content.trim();
   }

   ngOnInit(): void {
      
   }
}