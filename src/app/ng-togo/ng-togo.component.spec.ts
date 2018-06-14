import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTogoComponent } from './ng-togo.component';

describe('NgTogoComponent', () => {
  let component: NgTogoComponent;
  let fixture: ComponentFixture<NgTogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
