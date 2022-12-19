import { Component, OnInit } from '@angular/core';
import { AppBase } from '../base/app.base';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.css']
})
export class KycComponent extends AppBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setPageTitle('KYC');
    this.commonService.getAddressTypes();
    this.commonService.getContactTypes();
    this.commonService.getCountries();
    this.commonService.getCities();
    this.commonService.getUserArtifacts();
    this.commonService.getBankAccountTypes();
    this.commonService.getHospitalInsuranceClaimTypes();
    this.commonService.getUserTypes();
  }

}
