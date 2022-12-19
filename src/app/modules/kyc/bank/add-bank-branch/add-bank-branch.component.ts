import { Component, OnInit } from '@angular/core';
import { BankBranchForm } from 'src/app/forms/kyc/bank-branch-form';
import { KycBase } from '../../kyc.base';
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-bank-branch',
  templateUrl: './add-bank-branch.component.html',
  styleUrls: ['./add-bank-branch.component.css']
})
export class AddBankBranchComponent extends KycBase implements OnInit {

  routerLink: string = '/kyc/bank/list-bank-branch/'
  form: FormGroup;
  formService: BankBranchForm;
  id: number = null;
  banks: any[] = [];

  constructor(formService: BankBranchForm, private activatedRoute: ActivatedRoute) {
    super();
    this.formService = formService;
    this.form = this.formService.getForm();
  }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    this.getKycBanks();
    if (this.id){
      this.setPageTitle('Update Bank Branch');
      this.getById(this.id);
    } else{
      this.setPageTitle('Add Bank Branch');
    }
  }

  getById(id:number) {
    this.kycService.findKycBankBranchById(id).subscribe((response: any) => {
      this.form.patchValue(response);
      this.getCityByCountryId();
    }, err => {
      this.mapResponse(false);
    });
  }

  getKycBanks() {
    this.kycService.findAllKycBank().subscribe((response: any) => {
      this.banks = response;
    });
  }

  getCityByCountryId() {
    if (!this.banks || !this.banks.length) {
      this.getCityByCountryId();
    } else {
      const bank = this.banks.find(b => b.id == this.form.get('bankId').value);
      this.commonService.getCitiesByCountry(bank.countryId);
    }
  }

  submit() {
    this.formService.markAsSubmitted();
    if (this.form.valid) {
      let params = {...this.form.value};
      if (this.id) {
        params.id = this.id;
      }
      this.kycService.saveKycBankBranch(params).subscribe((response: any) => {
        this.router.navigate([this.routerLink]);
        this.mapResponse();
      }, err => {
        this.mapResponse(false);
      });
    }
  }

}
