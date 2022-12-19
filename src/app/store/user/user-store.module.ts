import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {userReducer} from "./reducer";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./effects";
import {UserTokenEffects} from "./activate/effects";
import {UserAuthEffects} from "./auth/effects";
import {userAuthReducer} from "./auth/reducer";
import {UserForgotPasswordEffects} from "./forgot-password/effects";
import {UserResetPasswordEffects} from "./reset-password/effects";

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([UserEffects, UserTokenEffects, UserAuthEffects, UserForgotPasswordEffects, UserResetPasswordEffects]),
    StoreModule.forFeature('auth', userAuthReducer),
    StoreModule.forFeature('user', userReducer),
  ],
  declarations: []
})
export class UserStoreModule {
}
