import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Injector, ErrorHandler} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./interceptors/auth.service";
import {BaseModule} from "./modules/base/base.module";
import {setAppInjector} from "./app-injector";
import {GlobalErrorHandlerService} from "./modules/base/global-error-handler.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    BaseModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    setAppInjector(injector);
  }
}
