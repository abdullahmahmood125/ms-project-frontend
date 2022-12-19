import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCitizenPassportComponent } from './add-citizen-passport.component';

describe('AddCitizenPassportComponent', () => {
  let component: AddCitizenPassportComponent;
  let fixture: ComponentFixture<AddCitizenPassportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCitizenPassportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCitizenPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
