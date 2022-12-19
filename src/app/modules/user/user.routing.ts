import {Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {UserAddComponent} from './auth/user-add/user-add.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserActivateComponent} from './auth/user-activate/user-activate.component';
import {AuthGuard} from '../../guards/auth.guard';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './auth/reset-password/reset-password.component';
import {ChangePasswordComponent} from './auth/change-password/change-password.component';
import { UserEditComponent } from './auth/user-edit/user-edit.component';

export const userRoutes: Routes = [

  // {path: 'sign-up', component: UserAddComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: UserEditComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'activate', component: UserActivateComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'change-password', component: ChangePasswordComponent},

];
