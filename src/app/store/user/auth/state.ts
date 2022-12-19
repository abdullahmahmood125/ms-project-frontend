export interface UserAuthState {
  errors: any;
  message: string;
  success: boolean;
  loading: boolean;
  token: string;
  // expiry: number;
  // permissions: string[];
  user: any;
}

export const initialUserAuthState = {
  errors: null,
  message: '',
  loading: false,
  success: false,
  token: '',
  // expiry: 0,
  // permissions: [],
  user: {}
};
