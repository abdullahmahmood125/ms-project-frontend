import { Component, OnInit } from '@angular/core';
import { KycUserAccountForm } from "../../../../forms/kyc/kyc-user-account";
import { FormGroup } from "@angular/forms";
import { KycBase } from '../../kyc.base';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-user-account',
  templateUrl: './add-user-account.component.html',
  styleUrls: ['./add-user-account.component.css']
})
export class AddUserAccountComponent extends KycBase implements OnInit {

  routerLink: string = '/kyc/user/list-user-account/'
  form: FormGroup;
  formService: KycUserAccountForm;
  id: number = null;
  banks: any[] = [];
  branches: any[] = [];
  users: any[] = [];

  constructor(formService: KycUserAccountForm, private activatedRoute: ActivatedRoute) {
    super();
    this.formService = formService;
    this.form = this.formService.getForm();
  }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    this.getKycBanks();
    this.getKycUsers();
    if (this.id){
      this.setPageTitle('Update User Account');
      this.getById(this.id);
    } else{
      this.setPageTitle('Add User Account');
    }
  }

  getById(id:number) {
    this.kycService.findKycUserAccountById(id).subscribe((response: any) => {
      this.form.patchValue(response);
      this.getBankBranchesByBankId();
    }, err => {
      this.mapResponse(false);
    });
  }

  getKycBanks() {
    this.kycService.findAllKycBank().subscribe((response: any) => {
      this.banks = response;
    });
  }

  getBankBranchesByBankId() {
    if (!this.form.get('bankId').value) {
      this.getBankBranchesByBankId();
    } else{
      this.branches = []
      this.kycService.getBankBranchesByBankId(this.form.get('bankId').value).subscribe((response: any) => {
        this.branches = response;
      });
    }
  }

  getKycUsers() {
    this.kycService.findAllKycUser().subscribe((response: any) => {
      this.users = response;
    });
  }

  submit() {
    this.formService.markAsSubmitted();
    if (this.form.valid) {
      let params = {...this.form.value, version: 1, status: 101};
      if (this.id) {
        params.id = this.id;
      }
      this.kycService.saveKycUserAccount(params).subscribe((response: any) => {
        this.router.navigate([this.routerLink]);
        this.mapResponse();
      }, err => {
        this.mapResponse(false);
      });
    }
  }

}
