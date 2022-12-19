import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {configReducer} from "./reducer";


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('config', configReducer)
  ],
  declarations: []
})
export class ConfigStoreModule {
}
