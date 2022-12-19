import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompanyBranchComponent } from './list-company-branch.component';

describe('ListCompanyBranchComponent', () => {
  let component: ListCompanyBranchComponent;
  let fixture: ComponentFixture<ListCompanyBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCompanyBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompanyBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
