import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

//Components
import { AppComponent } from './app.component';
import { NgTodoComponent } from './ng-todo/ng-todo.component';

import { AddTodoComponent } from './add-todo/add-todo.component';
import { CompleteAllComponent } from './complete-all/complete-all.component'

import { ListComponent } from './list/list.component';
import { TodoComponent } from './todo/todo.component';

import { TodoService } from './todo.service';

import { httpData } from './todo-db';

console.log(AppComponent)
@NgModule({
  declarations: [
    AppComponent,
    NgTodoComponent,

    AddTodoComponent,
    CompleteAllComponent,
    
    ListComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(httpData),
  ],
  providers: [
    TodoService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }