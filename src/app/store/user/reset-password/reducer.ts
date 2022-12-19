import {UserResetPasswordActions, UserResetPasswordActionTypes} from "./actions";
import {initialUserState, UserState} from "../state";

export function userResetPasswordReducer(state: UserState = initialUserState, action: UserResetPasswordActions) {
  let updatedState = {};
  switch (action.type) {
    case UserResetPasswordActionTypes.RESET_PASSWORD:
      updatedState = {
        loading: true
      };
      break;
    case UserResetPasswordActionTypes.RESET_PASSWORD_SUCCESS:
      updatedState = {
        errors: [],
        message: action.payload.message,
        loading: false,
        success: true,
      };
      break;
    case UserResetPasswordActionTypes.RESET_PASSWORD_ERROR:
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
  state = Object.assign({}, state, {resetPassword: updatedState});
  return state;
}
