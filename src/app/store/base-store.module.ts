import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserStoreModule} from "./user/user-store.module";
import {ConfigStoreModule} from "./config/config-store.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    UserStoreModule,
    ConfigStoreModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  declarations: []
})
export class BaseStoreModule {
}
