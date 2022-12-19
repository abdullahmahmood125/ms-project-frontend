import {environment} from "../../../../environments/environment";
import {LOCAL_STORAGE_KEYS} from "../../../enums/configuration";

export const isLoggedIn = (): boolean => {
  return !!localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH);
};

export const getEndPoint = () => {
  return environment.API_ENDPOINT;
};

export const getAppURL = () => {
  return environment.APP_URL;
};

export const getBaseURL = () => {
  return environment.BASE_URL;
};
