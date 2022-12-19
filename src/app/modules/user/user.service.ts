import {Injectable, Injector} from '@angular/core';
import {BaseService} from "../base/base.service";

@Injectable({providedIn: 'root'})
export class UserService extends BaseService {

  constructor(injector: Injector) {
    super(injector);
  }

  login(form: any) {
    return this.post('profile/auth/login', form);
  }

  register(form: any) {
    return this.post('profile/auth/register', form);
  }

  profile(id: number) {
    return this.get('profile/info/' + id);
  }

  activate(form: any) {
    return this.post('api/account/registrationtokenverification', form);
  }

  forgotPassword(form: any) {
    return this.post('api/account/forgotpassword', form);
  }

  resetPassword(form: any) {
    return this.post('api/account/resetpassword', form);
  }

  regenerateActivationToken(form: any) {
    return this.post('api/account/registrationtokenregeneration', form);
  }

  getUserById(userId = null) {
    let params = {};
    if (userId) {
      params = {
        userId: userId
      };
    }
    return this.get('api/account/getUserById', params);
  }

  updateUser(form: any) {
    return this.post('api/account/updateUser', form);
  }

  enableUserLogin(form: any) {
    return this.post('api/account/enableUserLogin', form);
  }

  changePassword(form: any) {
    return this.post('api/account/changePassword', form);
  }

  getUsersList(params: any) {
    return this.get('api/account/getUsersList', params);
  }

  deleteUser(id: number) {
    return this.deleteRequest('api/admin/deleteUser', {
      body: {
        'id': id,
      }
    });
  }


  createUser(params: any) {
    return this.post('api/account/createUser', params);
  }

  resendActivationEmail(params: any) {
    return this.get('api/account/ResendActivationEmail', params);
  }

}
