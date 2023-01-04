import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProposalComponent } from './list-proposal.component';

describe('ListTaskComponent', () => {
  let component: ListProposalComponent;
  let fixture: ComponentFixture<ListProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListProposalComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
