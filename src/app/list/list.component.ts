import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-todo__list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  constructor(private todoService: TodoService) {
      
  }

  ngOnInit() { 

  }

}
