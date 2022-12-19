import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BaseComponent} from './base.component';
import {NavigationModule} from "../common/navigation/navigation.module";
import {LoadingBarHttpClientModule} from "@ngx-loading-bar/http-client";
import {ToastrModule} from "ngx-toastr";
import {RouterTestingModule} from "@angular/router/testing";
import {BaseStoreModule} from "../../store/base-store.module";

describe('BaseComponent', () => {
  let component: BaseComponent;
  let fixture: ComponentFixture<BaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BaseComponent],
      imports: [
        NavigationModule,
        RouterTestingModule,
        LoadingBarHttpClientModule,
        BaseStoreModule,
        ToastrModule.forRoot({preventDuplicates: true}) // ToastrModule added
      ]
    },)
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
