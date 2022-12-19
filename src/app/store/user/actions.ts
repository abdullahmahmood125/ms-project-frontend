import {Action} from "@ngrx/store";

export const UserActionTypes = {
  IS_AUTHENTICATED: '[users] Already logged in',
  IS_AUTHENTICATED_ERROR: '[users] Already logged in error',
  IS_AUTHENTICATED_SUCCESS: '[users] Already logged in success',
  AUTHENTICATE: '[users] Authenticate',
  AUTHENTICATE_ERROR: '[users] Authentication error',
  AUTHENTICATE_SUCCESS: '[users] Authentication success',
  SIGN_OUT: '[users] Sign off',
  SIGN_OUT_ERROR: '[users] Sign off error',
  SIGN_OUT_SUCCESS: '[users] Sign off success',
};

/**
 * Authenticate.
 * @class AuthenticateAction
 * @implements {Action}
 */


export class AuthenticateAction implements Action {
  public type: string = UserActionTypes.AUTHENTICATE;

  constructor(public payload: { username: string, password: string }) {
  }
}

/**
 * Authentication error.
 * @class AuthenticationErrorAction
 * @implements {Action}
 */
export class AuthenticationErrorAction implements Action {
  public type: string = UserActionTypes.AUTHENTICATE_ERROR;

  constructor(public payload?: any) {
  }
}

/**
 * Authentication success.
 * @class AuthenticationSuccessAction
 * @implements {Action}
 */
export class AuthenticationSuccessAction implements Action {
  public type: string = UserActionTypes.AUTHENTICATE_SUCCESS;

  constructor(public payload: { user: any }, public redirect: boolean = true) {
  }
}


export class IsAuthenticatedAction implements Action {
  public type: string = UserActionTypes.IS_AUTHENTICATED;

  constructor() {
  }
}

export class IsAuthenticatedErrorAction implements Action {
  public type: string = UserActionTypes.IS_AUTHENTICATED_ERROR;

  constructor() {
  }
}

export class IsAuthenticatedSuccessAction implements Action {
  public type: string = UserActionTypes.IS_AUTHENTICATED_SUCCESS;

  constructor(public payload: { user: any }) {
  }
}

/**
 * Sign out.
 * @class SignOutAction
 * @implements {Action}
 */
export class SignOutAction implements Action {
  public type: string = UserActionTypes.SIGN_OUT;

  constructor() {
  }
}

/**
 * Sign out success.
 * @class SignOutSuccessAction
 * @implements {Action}
 */
export class SignOutSuccessAction implements Action {
  public type: string = UserActionTypes.SIGN_OUT_SUCCESS;

  constructor(public payload?: any) {
  }
}


/**
 * Authenticate.
 * @class AuthenticateAction
 * @implements {Action}
 */



/**
 * Actions type.
 * @type {Actions}
 */
export type UserActions =
  AuthenticateAction
  | AuthenticationErrorAction
  | AuthenticationSuccessAction
