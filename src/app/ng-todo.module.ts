import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

//Components
import { NgTodoComponent } from './ng-todo.component';

import { AddTodoComponent } from './add-todo/add-todo.component';
import { CompleteAllComponent } from './complete-all/complete-all.component'

import { ListComponent } from './list/list.component';
import { TodoComponent } from './todo/todo.component';

import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    NgTodoComponent,

    AddTodoComponent,
    CompleteAllComponent,
    
    ListComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    TodoService,
  ],
  bootstrap: [
    NgTodoComponent
  ]
})
export class NgTodoModule { }