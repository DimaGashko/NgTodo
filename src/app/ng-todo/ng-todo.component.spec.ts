import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTodoComponent } from './ng-todo.component';

describe('NgTodoComponent', () => {
  let component: NgTodoComponent;
  let fixture: ComponentFixture<NgTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
