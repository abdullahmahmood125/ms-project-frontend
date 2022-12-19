import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { AddCitizenImmigrationControlComponent } from './citizen/add-citizen-immigration-control/add-citizen-immigration-control.component';
import { AddCitizenPassportComponent } from './citizen/add-citizen-passport/add-citizen-passport.component';
import { AddCitizenVisaComponent } from './citizen/add-citizen-visa/add-citizen-visa.component';
import { AddCitizenComponent } from './citizen/add-citizen/add-citizen.component';
import { AddForiegnVisaAgencyBranchComponent } from './foriegn-visa-agency/add-foriegn-visa-agency-branch/add-foriegn-visa-agency-branch.component';
import { AddForiegnVisaAgencyComponent } from './foriegn-visa-agency/add-foriegn-visa-agency/add-foriegn-visa-agency.component';
import { AddImmigrationControlBranchComponent } from './immigration-control/add-immigration-control-branch/add-immigration-control-branch.component';
import { AddImmigrationControlComponent } from './immigration-control/add-immigration-control/add-immigration-control.component';
import { AddPassportAgencyBranchComponent } from './passport-agency/add-passport-agency-branch/add-passport-agency-branch.component';
import { AddPassportAgencyComponent } from './passport-agency/add-passport-agency/add-passport-agency.component';

const routes: Routes = [
  {path: 'citizen/add-citizen', component: AddCitizenComponent, canActivate: [AuthGuard]},
  {path: 'citizen/add-citizen-immigration-control', component: AddCitizenImmigrationControlComponent, canActivate: [AuthGuard]},
  {path: 'citizen/add-citizen-passport', component: AddCitizenPassportComponent, canActivate: [AuthGuard]},
  {path: 'citizen/add-citizen-visa', component: AddCitizenVisaComponent, canActivate: [AuthGuard]},
  {path: 'foreign-visa-agency/add-foreign-visa-agency', component: AddForiegnVisaAgencyComponent, canActivate: [AuthGuard]},
  {path: 'foreign-visa-agency/add-foreign-visa-agency-branch', component: AddForiegnVisaAgencyBranchComponent, canActivate: [AuthGuard]},
  {path: 'immigration-control/add-immigration-control', component: AddImmigrationControlComponent, canActivate: [AuthGuard]},
  {path: 'immigration-control/add-immigration-control-branch', component: AddImmigrationControlBranchComponent, canActivate: [AuthGuard]},
  {path: 'passport-agency/add-passport-agency', component: AddPassportAgencyComponent, canActivate: [AuthGuard]},
  {path: 'passport-agency/add-passport-agency-branch', component: AddPassportAgencyBranchComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PvRoutingModule { }
