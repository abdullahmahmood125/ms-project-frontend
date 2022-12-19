import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from "@angular/router";
import { userRoutes } from "./user.routing";
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserService } from "./user.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from "../common/shared/shared.module";
import { BasePipeModule } from "../common/pipes/base.pipe.module";
import { UserActivateComponent } from './auth/user-activate/user-activate.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { UserAddComponent } from './auth/user-add/user-add.component';
import { ForgotPasswordForm } from "../../forms/forgot-password-form";
import { ResetPasswordForm } from "../../forms/reset-password-form";
import { UserForm } from '../../forms/user.form';
import { UserEditComponent } from './auth/user-edit/user-edit.component';
import { UserEditForm } from 'src/app/forms/user-edit.form';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BasePipeModule,
    SharedModule,
  ],
  providers: [
    UserService, ForgotPasswordForm, ResetPasswordForm, UserForm, UserEditForm
  ],
  declarations: [
    UserComponent,
    LoginComponent,
    DashboardComponent,
    UserActivateComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    UserAddComponent,
    UserEditComponent,
  ],
  exports: []
})
export class UserModule {
}
