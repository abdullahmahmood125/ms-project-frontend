import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImmigrationControlBranchComponent } from './add-immigration-control-branch.component';

describe('AddImmigrationControlBranchComponent', () => {
  let component: AddImmigrationControlBranchComponent;
  let fixture: ComponentFixture<AddImmigrationControlBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddImmigrationControlBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImmigrationControlBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
