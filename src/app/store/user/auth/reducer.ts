import {initialUserAuthState, UserAuthState} from "./state";
import {UserActions, UserActionTypes} from "../actions";


export function userAuthReducer(state: UserAuthState = initialUserAuthState, action: UserActions) {
  let updatedState = {};
  switch (action.type) {
    case UserActionTypes.IS_AUTHENTICATED:
      updatedState = {
        loading: false
      };
      break;
    case UserActionTypes.AUTHENTICATE:
      updatedState = {
        loading: true
      };
      break;
    case UserActionTypes.IS_AUTHENTICATED_SUCCESS:
    case UserActionTypes.AUTHENTICATE_SUCCESS :
      updatedState = {
        success: true,
        errors: [],
        message: null,
        loading: false,
        // expiry: action.payload.expiry,
        token: action.payload.token,
        // permissions: action.payload.permissions,
        user: action.payload.user

      };
      break;
    case UserActionTypes.IS_AUTHENTICATED_ERROR:
      updatedState = {
        auth: {success: false, errors: [], message: null, loading: false}
      };
      break;
    case UserActionTypes.AUTHENTICATE_ERROR:
      updatedState = {
        success: false, errors: action.payload.errors, message: action.payload.message, loading: false
      };
      break;
    case UserActionTypes.SIGN_OUT_SUCCESS:
      updatedState = initialUserAuthState;
      break;
    default:
      break;
  }
  state = Object.assign({}, state, updatedState);
  return state;
}

