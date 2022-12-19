export interface UserRegenerateActivationState {
  token: string;
  success: boolean;
  loading: boolean;
}

export const initialUserRegenerateActivationState = {
  token: '',
  success: false,
  loading: false
};

export interface UserActivationState {
  message: string;
  token: string;
  expired: boolean;
  verified: boolean;
  loading: boolean;
  regenerate: UserRegenerateActivationState;
}

export const initialUserActivationState = {
  message: null,
  token: null,
  expired: false,
  verified: false,
  loading: false,
  regenerate: initialUserRegenerateActivationState
};
