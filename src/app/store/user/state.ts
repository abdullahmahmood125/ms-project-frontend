import {initialUserActivationState, UserActivationState} from "./activate/state";
import {initialUserForgotPasswordState, UserForgotPasswordState} from "./forgot-password/state";
import {initialUserResetPasswordState, UserResetPasswordState} from "./reset-password/state";


export interface UserState {
  resetPassword: UserResetPasswordState;
  forgotPassword: UserForgotPasswordState;
  activation: UserActivationState;
  token: UserActivationState;
  loaded: boolean;
  loading: boolean;
  errors: any;
  message: string;
  entities: any[];

}

export const initialUserState = {
  resetPassword: initialUserResetPasswordState,
  forgotPassword: initialUserForgotPasswordState,
  activation: initialUserActivationState,
  token: initialUserActivationState,
  loaded: false,
  loading: false,
  errors: null,
  message: null,
  user: null,
  entities: []
};
