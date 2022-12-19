import {Media} from "./media";

export interface UserDetails {
  id: number;
  username: string;
  email: string;
  media: Media;
  roles: any[];
  roleName: string;
  fullName: string;
  name: string;
  createdOn: string;
  roleId: number;
  isActive: boolean;
  emailConfirmed: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  addressTwo: string;
  cellNumber: string;
  city: string;
  zip: string;
  locationId: number;
  mediaId: number;
  isVerified: boolean;
  userType: number;
}

export interface Role {
  isSubRole: boolean;
  id: number;
  name: string;
  description: string;
}

export interface UserLogin {
  permissions: string[];
  user: UserDetails;
  isImpersonatedUser: boolean;
  expiry: number;
  token: string;
}
