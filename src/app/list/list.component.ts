import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'ng-todo__list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  constructor(private todoService: TodoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      
  }

  ngOnInit() { 
    this.activatedRoute.params.forEach((params: Params) => {
      let type = params.type;
      console.log(type);
    })
  }


}
