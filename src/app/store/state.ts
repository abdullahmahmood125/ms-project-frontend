import {UserState} from "./user/state";
import {UserAuthState} from "./user/auth/state";
import {ConfigState} from "./config/state";

export interface BaseState {
  auth: UserAuthState;
  user: UserState;
  config: ConfigState;
}
