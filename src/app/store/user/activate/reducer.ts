import {UserActivationActions, UserActivationActionTypes} from "./actions";
import {initialUserState, UserState} from "../state";

export function userActivationReducer(state: UserState = initialUserState, action: UserActivationActions) {
  let updatedState = {};
  switch (action.type) {
    case UserActivationActionTypes.VERIFY:
      updatedState = {
        loading: true
      };
      break;
    case UserActivationActionTypes.VERIFY_SUCCESS:
      updatedState = {
        expired: action.payload.result.expired,
        verified: action.payload.result.verified,
        message: action.payload.message,
        loading: false
      };
      break;
    case UserActivationActionTypes.VERIFY_ERROR:
      updatedState = {
        expired: action.payload.result.expired,
        verified: action.payload.result.verified,
        message: action.payload.message,
        loading: false
      };
      break;
    default:
      break;
  }
  state = Object.assign({}, state, {activation: updatedState});
  return state;
}
