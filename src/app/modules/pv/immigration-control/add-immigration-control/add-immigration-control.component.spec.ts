import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImmigrationControlComponent } from './add-immigration-control.component';

describe('AddImmigrationControlComponent', () => {
  let component: AddImmigrationControlComponent;
  let fixture: ComponentFixture<AddImmigrationControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddImmigrationControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImmigrationControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
