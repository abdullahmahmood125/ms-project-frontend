import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNewTaskComponent } from './list-new-task.component';

describe('ListTaskComponent', () => {
  let component: ListNewTaskComponent;
  let fixture: ComponentFixture<ListNewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListNewTaskComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
