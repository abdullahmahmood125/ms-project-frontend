import {initialUserRegenerateActivationState} from "../activate/state";

export const initialUserForgotPasswordState = {
  message: null,
  errors: [],
  loading: false,
  success: false
};

export interface UserForgotPasswordState {
  message: string;
  errors: any[];
  loading: boolean;
  success: boolean;
}

