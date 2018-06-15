import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgTodoComponent } from './ng-todo.component';

import { AddTodoComponent } from './add-todo/add-todo.component';
import { CompleteAllComponent } from './complete-all/complete-all.component'

import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    NgTodoComponent,

    AddTodoComponent,
    CompleteAllComponent,
    
    ListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NgTodoComponent]
})
export class NgTodoModule { }