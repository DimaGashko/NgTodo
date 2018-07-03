import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { NgTodoComponent } from './ng-todo/ng-todo.component';

import { AddTodoComponent } from './add-todo/add-todo.component';
import { CompleteAllComponent } from './complete-all/complete-all.component'

import { ListComponent } from './list/list.component';
import { TodoComponent } from './todo/todo.component';

import { TodoService } from './todo.service';
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
  ],
  providers: [
    TodoService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }