import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCitizenImmigrationControlComponent } from './add-citizen-immigration-control.component';

describe('AddCitizenImmigrationControlComponent', () => {
  let component: AddCitizenImmigrationControlComponent;
  let fixture: ComponentFixture<AddCitizenImmigrationControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCitizenImmigrationControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCitizenImmigrationControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
