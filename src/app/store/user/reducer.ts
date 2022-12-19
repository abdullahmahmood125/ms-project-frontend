import {UserActions, UserActionTypes} from "./actions";
import {initialUserState, UserState} from "./state";
import {userActivationReducer} from "./activate/reducer";
import {userForgotPasswordReducer} from "./forgot-password/reducer";
import {userResetPasswordReducer} from "./reset-password/reducer";


export function userReducer(state: UserState = initialUserState, action: UserActions) {
  if (action.type === UserActionTypes.SIGN_OUT) {
    return state = undefined;
  }
  state = userActivationReducer(state, action);
  state = userForgotPasswordReducer(state, action);
  state = userResetPasswordReducer(state, action);

  return state;
}
