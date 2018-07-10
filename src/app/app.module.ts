import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

//Components
import { AppComponent } from './app.component';
import { NgTodoComponent } from './ng-todo/ng-todo.component';

import { AddTodoComponent } from './add-todo/add-todo.component';
import { CompleteAllComponent } from './complete-all/complete-all.component';

import { ListComponent } from './list/list.component';
import { TodoComponent } from './todo/todo.component';

import { TodoService } from './todo.service';

import { httpData } from './todo-db';
import { FiltersService } from './filters.service';

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
    HttpClientInMemoryWebApiModule.forRoot(httpData, { delay: 0 }),
    RouterModule.forRoot([
      { path: ':type', component: ListComponent },
      { path: '', redirectTo: '/all', pathMatch: 'full' },
    ]),
  ],
  providers: [
    TodoService,
    FiltersService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }