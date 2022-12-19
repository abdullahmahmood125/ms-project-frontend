import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../common/shared/shared.module";
import { BasePipeModule } from "../common/pipes/base.pipe.module";
import { InsRoutingModule } from './ins-routing.module';
import { InsComponent } from './ins.component';
import { AddHospitalComponent } from './hospital/add-hospital/add-hospital.component';
import { AddHospitalBranchComponent } from './hospital/add-hospital-branch/add-hospital-branch.component';
import { AddCompanyComponent } from './insurance/add-company/add-company.component';
import { AddCompanyBranchComponent } from './insurance/add-company-branch/add-company-branch.component';
import { AddClaimComponent } from './hospital/add-claim/add-claim.component';
import { AddCustomerComponent } from './insurance/add-customer/add-customer.component';
import { AddPolicyComponent } from './insurance/add-policy/add-policy.component';
import { AddUserPolicyComponent } from './insurance/add-user-policy/add-user-policy.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { InsService } from './ins.service';
import { ListHospitalComponent } from './hospital/list-hospital/list-hospital.component';
import { ListCompanyComponent } from './insurance/list-company/list-company.component';
import { ListCompanyBranchComponent } from './insurance/list-company-branch/list-company-branch.component';
import { ListHospitalBranchComponent } from './hospital/list-hospital-branch/list-hospital-branch.component';
import { ListPolicyComponent } from './insurance/list-policy/list-policy.component';
@NgModule({
  declarations: [
    InsComponent,
    AddHospitalComponent,
    AddHospitalBranchComponent,
    AddCompanyComponent,
    AddCompanyBranchComponent,
    AddClaimComponent,
    AddCustomerComponent,
    AddPolicyComponent,
    AddUserPolicyComponent,
    ListHospitalComponent,
    ListCompanyComponent,
    ListCompanyBranchComponent,
    ListHospitalBranchComponent,
    ListPolicyComponent,
  ],
  imports: [
    CommonModule,
    InsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BasePipeModule,
    NgSelectModule
  ],
  providers: []
})
export class InsModule { }
