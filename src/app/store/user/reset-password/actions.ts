import {Action} from "@ngrx/store";

export const UserResetPasswordActionTypes = {
  RESET_PASSWORD: '[user] RESET PASSWORD ',
  RESET_PASSWORD_ERROR: '[user] RESET PASSWORD  error',
  RESET_PASSWORD_SUCCESS: '[user] RESET PASSWORD  success',
};


export class ResetPasswordAction implements Action {
  public type: string = UserResetPasswordActionTypes.RESET_PASSWORD;

  constructor(public payload: any) {
  }
}

export class ResetPasswordErrorAction implements Action {
  public type: string = UserResetPasswordActionTypes.RESET_PASSWORD_ERROR;

  constructor(public payload?: any) {
  }
}


export class ResetPasswordSuccessAction implements Action {
  public type: string = UserResetPasswordActionTypes.RESET_PASSWORD_SUCCESS;

  constructor(public payload: { payload: any }) {
  }
}


/**
 * Actions type.
 * @type {Actions}
 */
export type UserResetPasswordActions =
  ResetPasswordAction
  | ResetPasswordErrorAction
  | ResetPasswordSuccessAction
;
