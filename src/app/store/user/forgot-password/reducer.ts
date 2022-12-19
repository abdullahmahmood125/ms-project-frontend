import {UserForgotPasswordActions, UserForgotPasswordActionTypes} from "./actions";
import {initialUserState, UserState} from "../state";

export function userForgotPasswordReducer(state: UserState = initialUserState, action: UserForgotPasswordActions) {
  let updatedState = {};
  switch (action.type) {
    case UserForgotPasswordActionTypes.FORGOT_PASSWORD:
      updatedState = {
        loading: true
      };
      break;
    case UserForgotPasswordActionTypes.FORGOT_PASSWORD_SUCCESS:
      updatedState = {
        errors: [],
        message: action.payload.message,
        loading: false,
        success: true,
      };
      break;
    case UserForgotPasswordActionTypes.FORGOT_PASSWORD_ERROR:
      updatedState = {
        errors: action.payload.errors,
        message: action.payload.message,
        loading: false,
        success: false
      };
      break;
    default:
      break;
  }
  state = Object.assign({}, state, {forgotPassword: updatedState});
  return state;
}
