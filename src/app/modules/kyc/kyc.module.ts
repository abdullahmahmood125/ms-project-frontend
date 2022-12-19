import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../common/shared/shared.module";
import { BasePipeModule } from "../common/pipes/base.pipe.module";
import { KycRoutingModule } from './kyc-routing.module';
import { KycComponent } from './kyc.component';
import { AddBankComponent } from './bank/add-bank/add-bank.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { AddUserAccountComponent } from './user/add-user-account/add-user-account.component';
import { AddBankBranchComponent } from './bank/add-bank-branch/add-bank-branch.component';
import { KycService } from './kyc.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListBankComponent } from './bank/list-bank/list-bank.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { ListBankBranchComponent } from './bank/list-bank-branch/list-bank-branch.component';
import { ListUserAccountComponent } from './user/list-user-account/list-user-account.component';

@NgModule({
  declarations: [
    KycComponent,
    AddBankComponent,
    AddUserComponent,
    AddUserAccountComponent,
    AddBankBranchComponent,
    ListBankComponent,
    ListUserComponent,
    ListBankBranchComponent,
    ListUserAccountComponent
  ],
  imports: [
    CommonModule,
    KycRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BasePipeModule,
    NgSelectModule
  ],
  providers: []
})
export class KycModule { }
