import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgTodoComponent } from './ng-todo.component';

import { AddComponent } from './add/add.component';
import { CompleteAllComponent } from './complete-all/complete-all.component'

import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    NgTodoComponent,

    AddComponent,
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