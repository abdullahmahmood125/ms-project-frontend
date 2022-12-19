import {createSelector} from '@ngrx/store';
import {BaseState} from "../state";
import {UserState} from "./state";

export const selectUser = (state: BaseState) => state.user;
export const selectUserAuth = (state: BaseState) => state.auth;
export const selectUserAuthUser = (state: BaseState) => state.auth.user;
export const selectUserForgotPassword = (state: BaseState) => state.user.forgotPassword;
export const selectUserResetPassword = (state: BaseState) => state.user.resetPassword;
export const selectUserActivation = createSelector(
  selectUser,
  (state: UserState) => state.activation
);
