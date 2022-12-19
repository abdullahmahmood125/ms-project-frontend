import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCitizenVisaComponent } from './add-citizen-visa.component';

describe('AddCitizenVisaComponent', () => {
  let component: AddCitizenVisaComponent;
  let fixture: ComponentFixture<AddCitizenVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCitizenVisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCitizenVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
