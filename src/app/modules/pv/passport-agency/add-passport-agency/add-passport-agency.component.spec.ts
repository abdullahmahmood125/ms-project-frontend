import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPassportAgencyComponent } from './add-passport-agency.component';

describe('AddPassportAgencyComponent', () => {
  let component: AddPassportAgencyComponent;
  let fixture: ComponentFixture<AddPassportAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPassportAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPassportAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
