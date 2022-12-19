import {NgModule, Injectable} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {LOCAL_STORAGE_KEYS} from "../../../enums/configuration";
import {FormErrorsComponent} from './form-errors/form-errors.component';
import {BasePipeModule} from "../pipes/base.pipe.module";
import {NgxPermissionsModule} from "ngx-permissions";
import { PasswordPolicyComponent } from './password-policy/password-policy.component';
import {FlashMessagesComponent} from './flash-messages/flash-messages.component';
import {UserModel} from '../../../models/user.model';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BasePipeModule,
    NgxPermissionsModule,
  ],
  providers: [ConfirmationDialogService],
  declarations: [
    FormErrorsComponent,
    PasswordPolicyComponent,
    FlashMessagesComponent,
    ConfirmationDialogComponent
  ],
  exports: [
    FormErrorsComponent,
    NgxPermissionsModule,
    FlashMessagesComponent,
    PasswordPolicyComponent,
  ],
  entryComponents: []

})

@Injectable()
export class SharedModule {
  public static getLoginUser(): UserModel {
    let loginUser: UserModel;
    let auth: any = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH);
    if (auth) {
      auth = JSON.parse(auth);
      const user_json = Object.assign({}, auth.user, {permissions: auth.permissions});
      loginUser = new UserModel(user_json);
    }
    return (loginUser);
  }
}
