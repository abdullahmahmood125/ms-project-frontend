import {Injectable, Injector} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {getEndPoint} from "../common/shared/shared.methods";

@Injectable()
export class BaseService {
  public http: HttpClient;

  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  get(path: any, params: any = null, headers: any = null) {
    return this.http.get(getEndPoint() + path, this.paramsToQueryString(params, headers));
  }

  put(path: any, params: any) {
    return this.http.put(getEndPoint() + path, params);
  }

  post(path: any, params: any, external: boolean = false, headers: any = null) {

    if (!external) {
      path = getEndPoint() + path;
    }
    if (headers) {
      return this.http.post(path, params, headers);
    }
    return this.http.post(path, params);
  }

  request(method: any, path: any, options: any) {
    return this.http.request(method, getEndPoint() + path, options);
  }

  postRequest(path: any, options: any) {
    return this.request('post', path, options);
  }

  deleteRequest(path: any, options: any = {}) {
    return this.request('delete', path, options);
  }

  public paramsToQueryString(params: any, headers: any = null) {
    let paramObject = {
      params: new HttpParams({
        fromObject: params
      })
    };
    if (headers) {
      paramObject = Object.assign(paramObject, headers)
    }
    return paramObject;
  }
}
