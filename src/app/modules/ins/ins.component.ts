import { Component, OnInit } from '@angular/core';
import { AppBase } from '../base/app.base';

@Component({
  selector: 'app-ins',
  templateUrl: './ins.component.html',
  styleUrls: ['./ins.component.css']
})
export class InsComponent extends AppBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setPageTitle('Block Insurance');
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
