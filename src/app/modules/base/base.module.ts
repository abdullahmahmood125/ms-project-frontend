import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseComponent} from './base.component';
import {BaseStoreModule} from "../../store/base-store.module";
import {RouterModule} from "@angular/router";
import {NavigationModule} from "../common/navigation/navigation.module";
import {HomeComponent} from './home/home.component';
import {AuthGuard} from "../../guards/auth.guard";
import {NgxPermissionsModule} from "ngx-permissions";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {ModulesRouting} from "../modules.routing";
import {AppLayoutComponent} from './app-layout/app-layout.component';
import {FullScreenLayoutComponent} from './app-layout/full-screen-layout/full-screen-layout.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BasePipeModule} from "../common/pipes/base.pipe.module";
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule,
    BaseStoreModule,
    NgxPermissionsModule.forRoot(),
    LoadingBarHttpClientModule,
    BrowserAnimationsModule, // required animations module
    ModulesRouting,
    NgbModule,
    BasePipeModule,
    ToastrModule.forRoot({preventDuplicates: true}), // ToastrModule added,
  ],
  declarations: [BaseComponent, HomeComponent, AppLayoutComponent, FullScreenLayoutComponent],
  bootstrap: [BaseComponent],
  providers: [AuthGuard]
})
export class BaseModule {

}
