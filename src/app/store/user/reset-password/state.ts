export const initialUserResetPasswordState = {
  message: null,
  errors: [],
  loading: false,
  success: false
};

export interface UserResetPasswordState {
  message: string;
  errors: any[];
  loading: boolean;
  success: boolean;
}

