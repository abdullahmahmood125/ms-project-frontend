import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddForiegnVisaAgencyComponent } from './add-foriegn-visa-agency.component';

describe('AddForiegnVisaAgencyComponent', () => {
  let component: AddForiegnVisaAgencyComponent;
  let fixture: ComponentFixture<AddForiegnVisaAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddForiegnVisaAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddForiegnVisaAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
