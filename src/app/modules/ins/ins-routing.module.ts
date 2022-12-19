import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { AddClaimComponent } from './hospital/add-claim/add-claim.component';
import { AddHospitalBranchComponent } from './hospital/add-hospital-branch/add-hospital-branch.component';
import { AddHospitalComponent } from './hospital/add-hospital/add-hospital.component';
import { ListHospitalBranchComponent } from './hospital/list-hospital-branch/list-hospital-branch.component';
import { ListHospitalComponent } from './hospital/list-hospital/list-hospital.component';
import { InsComponent } from './ins.component';
import { AddCompanyBranchComponent } from './insurance/add-company-branch/add-company-branch.component';
import { AddCompanyComponent } from './insurance/add-company/add-company.component';
import { AddCustomerComponent } from './insurance/add-customer/add-customer.component';
import { AddPolicyComponent } from './insurance/add-policy/add-policy.component';
import { AddUserPolicyComponent } from './insurance/add-user-policy/add-user-policy.component';
import { ListCompanyBranchComponent } from './insurance/list-company-branch/list-company-branch.component';
import { ListCompanyComponent } from './insurance/list-company/list-company.component';
import { ListPolicyComponent } from './insurance/list-policy/list-policy.component';

const routes: Routes = [
  {
    path: '',
    component: InsComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'hospital/add-hospital', component: AddHospitalComponent, canActivate: [AuthGuard]},
      {path: 'hospital/add-hospital/:id', component: AddHospitalComponent, canActivate: [AuthGuard]},
      {path: 'hospital/list-hospital', component: ListHospitalComponent, canActivate: [AuthGuard]},
      {path: 'hospital/add-hospital-branch', component: AddHospitalBranchComponent, canActivate: [AuthGuard]},
      {path: 'hospital/add-hospital-branch/:id', component: AddHospitalBranchComponent, canActivate: [AuthGuard]},
      {path: 'hospital/list-hospital-branch', component: ListHospitalBranchComponent, canActivate: [AuthGuard]},
      {path: 'hospital/add-claim', component: AddClaimComponent, canActivate: [AuthGuard]},
      {path: 'hospital/add-claim/:id', component: AddClaimComponent, canActivate: [AuthGuard]},
      {path: 'insurance/add-company', component: AddCompanyComponent, canActivate: [AuthGuard]},
      {path: 'insurance/add-company/:id', component: AddCompanyComponent, canActivate: [AuthGuard]},
      {path: 'insurance/list-company', component: ListCompanyComponent, canActivate: [AuthGuard]},
      {path: 'insurance/add-company-branch', component: AddCompanyBranchComponent, canActivate: [AuthGuard]},
      {path: 'insurance/add-company-branch/:id', component: AddCompanyBranchComponent, canActivate: [AuthGuard]},
      {path: 'insurance/list-company-branch', component: ListCompanyBranchComponent, canActivate: [AuthGuard]},
      {path: 'insurance/add-customer', component: AddCustomerComponent, canActivate: [AuthGuard]},
      {path: 'insurance/add-customer/:id', component: AddCustomerComponent, canActivate: [AuthGuard]},
      {path: 'insurance/add-policy', component: AddPolicyComponent, canActivate: [AuthGuard]},
      {path: 'insurance/add-policy/:id', component: AddPolicyComponent, canActivate: [AuthGuard]},
      {path: 'insurance/list-policy', component: ListPolicyComponent, canActivate: [AuthGuard]},
      {path: 'insurance/add-user-policy', component: AddUserPolicyComponent, canActivate: [AuthGuard]},
      {path: 'insurance/add-user-policy/:id', component: AddUserPolicyComponent, canActivate: [AuthGuard]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsRoutingModule { }
