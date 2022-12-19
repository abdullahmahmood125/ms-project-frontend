import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../common/shared/shared.module";
import { BasePipeModule } from "../common/pipes/base.pipe.module";
import { PvRoutingModule } from './pv-routing.module';
import { PvComponent } from './pv.component';
import { AddCitizenComponent } from './citizen/add-citizen/add-citizen.component';
import { AddCitizenImmigrationControlComponent } from './citizen/add-citizen-immigration-control/add-citizen-immigration-control.component';
import { AddCitizenPassportComponent } from './citizen/add-citizen-passport/add-citizen-passport.component';
import { AddCitizenVisaComponent } from './citizen/add-citizen-visa/add-citizen-visa.component';
import { AddForiegnVisaAgencyComponent } from './foriegn-visa-agency/add-foriegn-visa-agency/add-foriegn-visa-agency.component';
import { AddForiegnVisaAgencyBranchComponent } from './foriegn-visa-agency/add-foriegn-visa-agency-branch/add-foriegn-visa-agency-branch.component';
import { AddImmigrationControlComponent } from './immigration-control/add-immigration-control/add-immigration-control.component';
import { AddImmigrationControlBranchComponent } from './immigration-control/add-immigration-control-branch/add-immigration-control-branch.component';
import { AddPassportAgencyComponent } from './passport-agency/add-passport-agency/add-passport-agency.component';
import { AddPassportAgencyBranchComponent } from './passport-agency/add-passport-agency-branch/add-passport-agency-branch.component';


@NgModule({
  declarations: [
    PvComponent,
    AddCitizenComponent,
    AddCitizenImmigrationControlComponent,
    AddCitizenPassportComponent,
    AddCitizenVisaComponent,
    AddForiegnVisaAgencyComponent,
    AddForiegnVisaAgencyBranchComponent,
    AddImmigrationControlComponent,
    AddImmigrationControlBranchComponent,
    AddPassportAgencyComponent,
    AddPassportAgencyBranchComponent
  ],
  imports: [
    CommonModule,
    PvRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BasePipeModule,
  ]
})
export class PvModule { }
