import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserAccountComponent } from './list-user-account.component';

describe('ListUserAccountComponent', () => {
  let component: ListUserAccountComponent;
  let fixture: ComponentFixture<ListUserAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
