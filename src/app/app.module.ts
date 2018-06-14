import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgTogoComponent } from './ng-togo/ng-togo.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    NgTogoComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

var a: number = 5;
a = '';
