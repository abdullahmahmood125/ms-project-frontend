import {Action} from "@ngrx/store";

export const UserActivationActionTypes = {
  VERIFY: '[user] VERIFY',
  VERIFY_ERROR: '[user] VERIFY error',
  VERIFY_SUCCESS: '[user] VERIFY success',
  REGENERATE_ACTIVATION: '[user] REGENERATE_ACTIVATION',
  REGENERATE_ACTIVATION_ERROR: '[user] REGENERATE_ACTIVATION error',
  REGENERATE_ACTIVATION_SUCCESS: '[user] REGENERATE_ACTIVATION success',
};


export class VerifyAction implements Action {
  public type: string = UserActivationActionTypes.VERIFY;

  constructor(public payload: { token: string }) {
  }
}

export class VerifyErrorAction implements Action {
  public type: string = UserActivationActionTypes.VERIFY_ERROR;

  constructor(public payload?: any) {
  }
}


export class VerifySuccessAction implements Action {
  public type: string = UserActivationActionTypes.VERIFY_SUCCESS;

  constructor(public payload: { payload: any }) {
  }
}

export class RegenerateActivationAction implements Action {
  public type: string = UserActivationActionTypes.REGENERATE_ACTIVATION;

  constructor(public payload: { token: string }) {
  }
}

export class RegenerateActivationErrorAction implements Action {
  public type: string = UserActivationActionTypes.REGENERATE_ACTIVATION_ERROR;

  constructor(public payload?: any) {
  }
}


export class RegenerateActivationSuccessAction implements Action {
  public type: string = UserActivationActionTypes.REGENERATE_ACTIVATION_SUCCESS;

  constructor(public payload: { payload: any }) {
  }
}

/**
 * Actions type.
 * @type {Actions}
 */
export type UserActivationActions =
  VerifyAction
  | VerifyErrorAction
  | VerifySuccessAction | RegenerateActivationAction
  | RegenerateActivationErrorAction
  | RegenerateActivationSuccessAction;
