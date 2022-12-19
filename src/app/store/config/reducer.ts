import {ConfigActions, ConfigActionTypes} from "./actions";
import {ConfigState, initialConfigState} from "./state";

export function configReducer(state: ConfigState = initialConfigState, action: ConfigActions) {
  let updatedState = {};
  switch (action.type) {
    case ConfigActionTypes.SET_PAGE_TITLE:
      updatedState = {
        page_title: action.payload
      };
      break;
    default:
      break;
  }
  state = Object.assign({}, state, updatedState);
  return state;
}
