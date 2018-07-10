import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FiltersService } from '../filters.service';
import { Todo } from '../todo';

@Component({
  selector: 'ng-todo__list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  constructor(private todoService: TodoService,
    private filtersService: FiltersService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      
  }

  todos: Todo[] = [];

  ngOnInit() { 
    this.activatedRoute.params.forEach((params: Params) => {
      let type = params.type;

      if (!this.filtersService.filters[type]) {
        type = this.filtersService.defaultType;
        this.router.navigate(['', type]);
      }

      this.todos = this.filtersService.filters[type]
        .getTodos(this.todoService.todos);
    });
  }


}
