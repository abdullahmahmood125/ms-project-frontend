import {Action} from "@ngrx/store";

export const UserForgotPasswordActionTypes = {
  FORGOT_PASSWORD: '[user] FORGOT PASSWORD ',
  FORGOT_PASSWORD_ERROR: '[user] FORGOT PASSWORD  error',
  FORGOT_PASSWORD_SUCCESS: '[user] FORGOT PASSWORD  success',
};


export class ForgotPasswordAction implements Action {
  public type: string = UserForgotPasswordActionTypes.FORGOT_PASSWORD;

  constructor(public payload: any) {
  }
}

export class ForgotPasswordErrorAction implements Action {
  public type: string = UserForgotPasswordActionTypes.FORGOT_PASSWORD_ERROR;

  constructor(public payload?: any) {
  }
}


export class ForgotPasswordSuccessAction implements Action {
  public type: string = UserForgotPasswordActionTypes.FORGOT_PASSWORD_SUCCESS;

  constructor(public payload: { payload: any }) {
  }
}


/**
 * Actions type.
 * @type {Actions}
 */
export type UserForgotPasswordActions =
  ForgotPasswordAction
  | ForgotPasswordErrorAction
  | ForgotPasswordSuccessAction
;
