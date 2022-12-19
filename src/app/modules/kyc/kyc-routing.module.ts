import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { AddBankBranchComponent } from './bank/add-bank-branch/add-bank-branch.component';
import { AddBankComponent } from './bank/add-bank/add-bank.component';
import { ListBankBranchComponent } from './bank/list-bank-branch/list-bank-branch.component';
import { ListBankComponent } from './bank/list-bank/list-bank.component';
import { KycComponent } from './kyc.component';
import { AddUserAccountComponent } from './user/add-user-account/add-user-account.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ListUserAccountComponent } from './user/list-user-account/list-user-account.component';
import { ListUserComponent } from './user/list-user/list-user.component';

const routes: Routes = [
  {
    path: '',
    component: KycComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'bank/add-bank', component: AddBankComponent, canActivate: [AuthGuard]},
      {path: 'bank/add-bank/:id', component: AddBankComponent, canActivate: [AuthGuard]},
      {path: 'bank/list-bank', component: ListBankComponent, canActivate: [AuthGuard]},
      {path: 'bank/add-bank-branch', component: AddBankBranchComponent, canActivate: [AuthGuard]},
      {path: 'bank/add-bank-branch/:id', component: AddBankBranchComponent, canActivate: [AuthGuard]},
      {path: 'bank/list-bank-branch', component: ListBankBranchComponent, canActivate: [AuthGuard]},
      {path: 'user/add-user', component: AddUserComponent, canActivate: [AuthGuard]},
      {path: 'user/add-user/:id', component: AddUserComponent, canActivate: [AuthGuard]},
      {path: 'user/list-user', component: ListUserComponent, canActivate: [AuthGuard]},
      {path: 'user/add-user-account', component: AddUserAccountComponent, canActivate: [AuthGuard]},
      {path: 'user/add-user-account/:id', component: AddUserAccountComponent, canActivate: [AuthGuard]},
      {path: 'user/list-user-account', component: ListUserAccountComponent, canActivate: [AuthGuard]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KycRoutingModule { }
