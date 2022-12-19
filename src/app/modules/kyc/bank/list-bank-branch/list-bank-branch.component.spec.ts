import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBankBranchComponent } from './list-bank-branch.component';

describe('ListBankBranchComponent', () => {
  let component: ListBankBranchComponent;
  let fixture: ComponentFixture<ListBankBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBankBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBankBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
