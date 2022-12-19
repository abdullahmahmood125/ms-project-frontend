import {UserDetails, UserLogin} from "../user";
import {Media} from "../media";

export interface response {
  loading: boolean;
  success: boolean;
  errors: any[];
  message: string;
  exception: string;
  statusCode: number;
  result: any
    | UserLogin
    | UserDetails
    | Media
}
