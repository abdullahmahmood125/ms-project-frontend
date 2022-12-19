import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPassportAgencyBranchComponent } from './add-passport-agency-branch.component';

describe('AddPassportAgencyBranchComponent', () => {
  let component: AddPassportAgencyBranchComponent;
  let fixture: ComponentFixture<AddPassportAgencyBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPassportAgencyBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPassportAgencyBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
