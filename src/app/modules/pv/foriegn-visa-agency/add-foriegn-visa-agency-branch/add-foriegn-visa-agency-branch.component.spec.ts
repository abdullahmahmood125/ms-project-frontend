import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddForiegnVisaAgencyBranchComponent } from './add-foriegn-visa-agency-branch.component';

describe('AddForiegnVisaAgencyBranchComponent', () => {
  let component: AddForiegnVisaAgencyBranchComponent;
  let fixture: ComponentFixture<AddForiegnVisaAgencyBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddForiegnVisaAgencyBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddForiegnVisaAgencyBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
